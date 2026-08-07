# `rumRetentionFiltersOrder` Submodule <a name="`rumRetentionFiltersOrder` Submodule" id="@cdktn/provider-datadog.rumRetentionFiltersOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumRetentionFiltersOrder <a name="RumRetentionFiltersOrder" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/rum_retention_filters_order datadog_rum_retention_filters_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.Initializer"></a>

```typescript
import { rumRetentionFiltersOrder } from '@cdktn/provider-datadog'

new rumRetentionFiltersOrder.RumRetentionFiltersOrder(scope: Construct, id: string, config: RumRetentionFiltersOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig">RumRetentionFiltersOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig">RumRetentionFiltersOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RumRetentionFiltersOrder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isConstruct"></a>

```typescript
import { rumRetentionFiltersOrder } from '@cdktn/provider-datadog'

rumRetentionFiltersOrder.RumRetentionFiltersOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isTerraformElement"></a>

```typescript
import { rumRetentionFiltersOrder } from '@cdktn/provider-datadog'

rumRetentionFiltersOrder.RumRetentionFiltersOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isTerraformResource"></a>

```typescript
import { rumRetentionFiltersOrder } from '@cdktn/provider-datadog'

rumRetentionFiltersOrder.RumRetentionFiltersOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.generateConfigForImport"></a>

```typescript
import { rumRetentionFiltersOrder } from '@cdktn/provider-datadog'

rumRetentionFiltersOrder.RumRetentionFiltersOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RumRetentionFiltersOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RumRetentionFiltersOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RumRetentionFiltersOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/rum_retention_filters_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RumRetentionFiltersOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.retentionFilterIdsInput">retentionFilterIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.retentionFilterIds">retentionFilterIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `retentionFilterIdsInput`<sup>Optional</sup> <a name="retentionFilterIdsInput" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.retentionFilterIdsInput"></a>

```typescript
public readonly retentionFilterIdsInput: string[];
```

- *Type:* string[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `retentionFilterIds`<sup>Required</sup> <a name="retentionFilterIds" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.retentionFilterIds"></a>

```typescript
public readonly retentionFilterIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RumRetentionFiltersOrderConfig <a name="RumRetentionFiltersOrderConfig" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.Initializer"></a>

```typescript
import { rumRetentionFiltersOrder } from '@cdktn/provider-datadog'

const rumRetentionFiltersOrderConfig: rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.applicationId">applicationId</a></code> | <code>string</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.retentionFilterIds">retentionFilterIds</a></code> | <code>string[]</code> | RUM retention filter ID list. The order of IDs in this attribute defines the order of RUM retention filters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/rum_retention_filters_order#application_id RumRetentionFiltersOrder#application_id}

---

##### `retentionFilterIds`<sup>Required</sup> <a name="retentionFilterIds" id="@cdktn/provider-datadog.rumRetentionFiltersOrder.RumRetentionFiltersOrderConfig.property.retentionFilterIds"></a>

```typescript
public readonly retentionFilterIds: string[];
```

- *Type:* string[]

RUM retention filter ID list. The order of IDs in this attribute defines the order of RUM retention filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/rum_retention_filters_order#retention_filter_ids RumRetentionFiltersOrder#retention_filter_ids}

---



