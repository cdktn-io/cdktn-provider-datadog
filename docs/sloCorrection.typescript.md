# `sloCorrection` Submodule <a name="`sloCorrection` Submodule" id="@cdktn/provider-datadog.sloCorrection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SloCorrection <a name="SloCorrection" id="@cdktn/provider-datadog.sloCorrection.SloCorrection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction datadog_slo_correction}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.Initializer"></a>

```typescript
import { sloCorrection } from '@cdktn/provider-datadog'

new sloCorrection.SloCorrection(scope: Construct, id: string, config: SloCorrectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig">SloCorrectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig">SloCorrectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.resetRrule">resetRrule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetEnd` <a name="resetEnd" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRrule` <a name="resetRrule" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.resetRrule"></a>

```typescript
public resetRrule(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SloCorrection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.isConstruct"></a>

```typescript
import { sloCorrection } from '@cdktn/provider-datadog'

sloCorrection.SloCorrection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.isTerraformElement"></a>

```typescript
import { sloCorrection } from '@cdktn/provider-datadog'

sloCorrection.SloCorrection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.isTerraformResource"></a>

```typescript
import { sloCorrection } from '@cdktn/provider-datadog'

sloCorrection.SloCorrection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport"></a>

```typescript
import { sloCorrection } from '@cdktn/provider-datadog'

sloCorrection.SloCorrection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SloCorrection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SloCorrection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SloCorrection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SloCorrection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.rruleInput">rruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput">sloIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.rrule">rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.sloId">sloId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.rruleInput"></a>

```typescript
public readonly rruleInput: string;
```

- *Type:* string

---

##### `sloIdInput`<sup>Optional</sup> <a name="sloIdInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput"></a>

```typescript
public readonly sloIdInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

---

##### `sloId`<sup>Required</sup> <a name="sloId" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.sloId"></a>

```typescript
public readonly sloId: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SloCorrectionConfig <a name="SloCorrectionConfig" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.Initializer"></a>

```typescript
import { sloCorrection } from '@cdktn/provider-datadog'

const sloCorrectionConfig: sloCorrection.SloCorrectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.category">category</a></code> | <code>string</code> | Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId">sloId</a></code> | <code>string</code> | ID of the SLO that this correction will be applied to. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.start">start</a></code> | <code>number</code> | Starting time of the correction in epoch seconds. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.description">description</a></code> | <code>string</code> | Description of the correction being made. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration">duration</a></code> | <code>number</code> | Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`). |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.end">end</a></code> | <code>number</code> | Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#id SloCorrection#id}. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule">rrule</a></code> | <code>string</code> | Recurrence rules as defined in the iCalendar RFC 5545. |
| <code><a href="#@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone">timezone</a></code> | <code>string</code> | The timezone to display in the UI for the correction times. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#category SloCorrection#category}

---

##### `sloId`<sup>Required</sup> <a name="sloId" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId"></a>

```typescript
public readonly sloId: string;
```

- *Type:* string

ID of the SLO that this correction will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#slo_id SloCorrection#slo_id}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Starting time of the correction in epoch seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#start SloCorrection#start}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the correction being made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#description SloCorrection#description}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#duration SloCorrection#duration}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#end SloCorrection#end}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#id SloCorrection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

Recurrence rules as defined in the iCalendar RFC 5545.

Supported rules for SLO corrections are `FREQ`, `INTERVAL`, `COUNT` and `UNTIL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#rrule SloCorrection#rrule}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The timezone to display in the UI for the correction times.

Prefers IANA timezone name format (for example, 'America/Los_Angeles', 'Europe/Paris'), but some common standard abbreviations are supported. Defaults to 'UTC'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/slo_correction#timezone SloCorrection#timezone}

---



