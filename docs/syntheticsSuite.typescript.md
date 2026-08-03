# `syntheticsSuite` Submodule <a name="`syntheticsSuite` Submodule" id="@cdktn/provider-datadog.syntheticsSuite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsSuite <a name="SyntheticsSuite" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite datadog_synthetics_suite}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

new syntheticsSuite.SyntheticsSuite(scope: Construct, id: string, config: SyntheticsSuiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig">SyntheticsSuiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig">SyntheticsSuiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests">putTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests">resetTests</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions"></a>

```typescript
public putOptions(value: IResolvable | SyntheticsSuiteOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]

---

##### `putTests` <a name="putTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests"></a>

```typescript
public putTests(value: IResolvable | SyntheticsSuiteTests[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]

---

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTests` <a name="resetTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests"></a>

```typescript
public resetTests(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

syntheticsSuite.SyntheticsSuite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

syntheticsSuite.SyntheticsSuite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

syntheticsSuite.SyntheticsSuite.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

syntheticsSuite.SyntheticsSuite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsSuite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsSuite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsSuite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests">tests</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput">optionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput">testsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options"></a>

```typescript
public readonly options: SyntheticsSuiteOptionsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a>

---

##### `tests`<sup>Required</sup> <a name="tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests"></a>

```typescript
public readonly tests: SyntheticsSuiteTestsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | SyntheticsSuiteOptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `testsInput`<sup>Optional</sup> <a name="testsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput"></a>

```typescript
public readonly testsInput: IResolvable | SyntheticsSuiteTests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsSuiteConfig <a name="SyntheticsSuiteConfig" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.Initializer"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

const syntheticsSuiteConfig: syntheticsSuite.SyntheticsSuiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name">name</a></code> | <code>string</code> | Name of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message">message</a></code> | <code>string</code> | Message of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options">options</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]</code> | options block. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags">tags</a></code> | <code>string[]</code> | A set of tags to associate with your synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests">tests</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]</code> | tests block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#name SyntheticsSuite#name}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Message of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#message SyntheticsSuite#message}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options"></a>

```typescript
public readonly options: IResolvable | SyntheticsSuiteOptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#options SyntheticsSuite#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A set of tags to associate with your synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#tags SyntheticsSuite#tags}

---

##### `tests`<sup>Optional</sup> <a name="tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests"></a>

```typescript
public readonly tests: IResolvable | SyntheticsSuiteTests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]

tests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#tests SyntheticsSuite#tests}

---

### SyntheticsSuiteOptions <a name="SyntheticsSuiteOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.Initializer"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

const syntheticsSuiteOptions: syntheticsSuite.SyntheticsSuiteOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold">alertingThreshold</a></code> | <code>number</code> | Alerting threshold for the suite. Value must be between 0.000000 and 1.000000. |

---

##### `alertingThreshold`<sup>Required</sup> <a name="alertingThreshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold"></a>

```typescript
public readonly alertingThreshold: number;
```

- *Type:* number

Alerting threshold for the suite. Value must be between 0.000000 and 1.000000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#alerting_threshold SyntheticsSuite#alerting_threshold}

---

### SyntheticsSuiteTests <a name="SyntheticsSuiteTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.Initializer"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

const syntheticsSuiteTests: syntheticsSuite.SyntheticsSuiteTests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId">publicId</a></code> | <code>string</code> | Public ID of the test. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality">alertingCriticality</a></code> | <code>string</code> | Alerting criticality for the test. Valid values are `ignore`, `critical`. |

---

##### `publicId`<sup>Required</sup> <a name="publicId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId"></a>

```typescript
public readonly publicId: string;
```

- *Type:* string

Public ID of the test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#public_id SyntheticsSuite#public_id}

---

##### `alertingCriticality`<sup>Optional</sup> <a name="alertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality"></a>

```typescript
public readonly alertingCriticality: string;
```

- *Type:* string

Alerting criticality for the test. Valid values are `ignore`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/synthetics_suite#alerting_criticality SyntheticsSuite#alerting_criticality}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsSuiteOptionsList <a name="SyntheticsSuiteOptionsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

new syntheticsSuite.SyntheticsSuiteOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get"></a>

```typescript
public get(index: number): SyntheticsSuiteOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsSuiteOptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]

---


### SyntheticsSuiteOptionsOutputReference <a name="SyntheticsSuiteOptionsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

new syntheticsSuite.SyntheticsSuiteOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput">alertingThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold">alertingThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertingThresholdInput`<sup>Optional</sup> <a name="alertingThresholdInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput"></a>

```typescript
public readonly alertingThresholdInput: number;
```

- *Type:* number

---

##### `alertingThreshold`<sup>Required</sup> <a name="alertingThreshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold"></a>

```typescript
public readonly alertingThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsSuiteOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>

---


### SyntheticsSuiteTestsList <a name="SyntheticsSuiteTestsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

new syntheticsSuite.SyntheticsSuiteTestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get"></a>

```typescript
public get(index: number): SyntheticsSuiteTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsSuiteTests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]

---


### SyntheticsSuiteTestsOutputReference <a name="SyntheticsSuiteTestsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer"></a>

```typescript
import { syntheticsSuite } from '@cdktn/provider-datadog'

new syntheticsSuite.SyntheticsSuiteTestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality">resetAlertingCriticality</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlertingCriticality` <a name="resetAlertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality"></a>

```typescript
public resetAlertingCriticality(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput">alertingCriticalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput">publicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality">alertingCriticality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId">publicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertingCriticalityInput`<sup>Optional</sup> <a name="alertingCriticalityInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput"></a>

```typescript
public readonly alertingCriticalityInput: string;
```

- *Type:* string

---

##### `publicIdInput`<sup>Optional</sup> <a name="publicIdInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput"></a>

```typescript
public readonly publicIdInput: string;
```

- *Type:* string

---

##### `alertingCriticality`<sup>Required</sup> <a name="alertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality"></a>

```typescript
public readonly alertingCriticality: string;
```

- *Type:* string

---

##### `publicId`<sup>Required</sup> <a name="publicId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId"></a>

```typescript
public readonly publicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsSuiteTests;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>

---



