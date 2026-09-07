# `rumRetentionQuota` Submodule <a name="`rumRetentionQuota` Submodule" id="@cdktn/provider-datadog.rumRetentionQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumRetentionQuota <a name="RumRetentionQuota" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota datadog_rum_retention_quota}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer"></a>

```typescript
import { rumRetentionQuota } from '@cdktn/provider-datadog'

new rumRetentionQuota.RumRetentionQuota(scope: Construct, id: string, config: RumRetentionQuotaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig">RumRetentionQuotaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig">RumRetentionQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom">putCustom</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustom` <a name="putCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom"></a>

```typescript
public putCustom(value: RumRetentionQuotaCustom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct"></a>

```typescript
import { rumRetentionQuota } from '@cdktn/provider-datadog'

rumRetentionQuota.RumRetentionQuota.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement"></a>

```typescript
import { rumRetentionQuota } from '@cdktn/provider-datadog'

rumRetentionQuota.RumRetentionQuota.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource"></a>

```typescript
import { rumRetentionQuota } from '@cdktn/provider-datadog'

rumRetentionQuota.RumRetentionQuota.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport"></a>

```typescript
import { rumRetentionQuota } from '@cdktn/provider-datadog'

rumRetentionQuota.RumRetentionQuota.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RumRetentionQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RumRetentionQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RumRetentionQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput">customInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode">mode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom"></a>

```typescript
public readonly custom: RumRetentionQuotaCustomOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput"></a>

```typescript
public readonly customInput: IResolvable | RumRetentionQuotaCustom;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RumRetentionQuotaConfig <a name="RumRetentionQuotaConfig" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.Initializer"></a>

```typescript
import { rumRetentionQuota } from '@cdktn/provider-datadog'

const rumRetentionQuotaConfig: rumRetentionQuota.RumRetentionQuotaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId">applicationId</a></code> | <code>string</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | custom block. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode">mode</a></code> | <code>string</code> | The retention quota mode. Valid values are `custom`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#application_id RumRetentionQuota#application_id}

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom"></a>

```typescript
public readonly custom: RumRetentionQuotaCustom;
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#custom RumRetentionQuota#custom}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The retention quota mode. Valid values are `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#mode RumRetentionQuota#mode}

---

### RumRetentionQuotaCustom <a name="RumRetentionQuotaCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.Initializer"></a>

```typescript
import { rumRetentionQuota } from '@cdktn/provider-datadog'

const rumRetentionQuotaCustom: rumRetentionQuota.RumRetentionQuotaCustom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime">dailyResetTime</a></code> | <code>string</code> | The time of day the quota resets, in `HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone">dailyResetTimezone</a></code> | <code>string</code> | The UTC offset for `daily_reset_time`, in `±HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction">quotaReachedAction</a></code> | <code>string</code> | The action taken after the quota is reached. Valid values are `stop`, `slowdown`. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit">sessionLimit</a></code> | <code>number</code> | The maximum number of sessions to retain within the window. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType">windowType</a></code> | <code>string</code> | The window over which the quota resets. Valid values are `daily`. |

---

##### `dailyResetTime`<sup>Required</sup> <a name="dailyResetTime" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime"></a>

```typescript
public readonly dailyResetTime: string;
```

- *Type:* string

The time of day the quota resets, in `HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_time RumRetentionQuota#daily_reset_time}

---

##### `dailyResetTimezone`<sup>Required</sup> <a name="dailyResetTimezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone"></a>

```typescript
public readonly dailyResetTimezone: string;
```

- *Type:* string

The UTC offset for `daily_reset_time`, in `±HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_timezone RumRetentionQuota#daily_reset_timezone}

---

##### `quotaReachedAction`<sup>Required</sup> <a name="quotaReachedAction" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction"></a>

```typescript
public readonly quotaReachedAction: string;
```

- *Type:* string

The action taken after the quota is reached. Valid values are `stop`, `slowdown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#quota_reached_action RumRetentionQuota#quota_reached_action}

---

##### `sessionLimit`<sup>Required</sup> <a name="sessionLimit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit"></a>

```typescript
public readonly sessionLimit: number;
```

- *Type:* number

The maximum number of sessions to retain within the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#session_limit RumRetentionQuota#session_limit}

---

##### `windowType`<sup>Required</sup> <a name="windowType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType"></a>

```typescript
public readonly windowType: string;
```

- *Type:* string

The window over which the quota resets. Valid values are `daily`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#window_type RumRetentionQuota#window_type}

---

## Classes <a name="Classes" id="Classes"></a>

### RumRetentionQuotaCustomOutputReference <a name="RumRetentionQuotaCustomOutputReference" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer"></a>

```typescript
import { rumRetentionQuota } from '@cdktn/provider-datadog'

new rumRetentionQuota.RumRetentionQuotaCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput">dailyResetTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput">dailyResetTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput">quotaReachedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput">sessionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput">windowTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime">dailyResetTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone">dailyResetTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction">quotaReachedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit">sessionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType">windowType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailyResetTimeInput`<sup>Optional</sup> <a name="dailyResetTimeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput"></a>

```typescript
public readonly dailyResetTimeInput: string;
```

- *Type:* string

---

##### `dailyResetTimezoneInput`<sup>Optional</sup> <a name="dailyResetTimezoneInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput"></a>

```typescript
public readonly dailyResetTimezoneInput: string;
```

- *Type:* string

---

##### `quotaReachedActionInput`<sup>Optional</sup> <a name="quotaReachedActionInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput"></a>

```typescript
public readonly quotaReachedActionInput: string;
```

- *Type:* string

---

##### `sessionLimitInput`<sup>Optional</sup> <a name="sessionLimitInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput"></a>

```typescript
public readonly sessionLimitInput: number;
```

- *Type:* number

---

##### `windowTypeInput`<sup>Optional</sup> <a name="windowTypeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput"></a>

```typescript
public readonly windowTypeInput: string;
```

- *Type:* string

---

##### `dailyResetTime`<sup>Required</sup> <a name="dailyResetTime" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime"></a>

```typescript
public readonly dailyResetTime: string;
```

- *Type:* string

---

##### `dailyResetTimezone`<sup>Required</sup> <a name="dailyResetTimezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone"></a>

```typescript
public readonly dailyResetTimezone: string;
```

- *Type:* string

---

##### `quotaReachedAction`<sup>Required</sup> <a name="quotaReachedAction" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction"></a>

```typescript
public readonly quotaReachedAction: string;
```

- *Type:* string

---

##### `sessionLimit`<sup>Required</sup> <a name="sessionLimit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit"></a>

```typescript
public readonly sessionLimit: number;
```

- *Type:* number

---

##### `windowType`<sup>Required</sup> <a name="windowType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType"></a>

```typescript
public readonly windowType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumRetentionQuotaCustom;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---



