# `rumOperation` Submodule <a name="`rumOperation` Submodule" id="@cdktn/provider-datadog.rumOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumOperation <a name="RumOperation" id="@cdktn/provider-datadog.rumOperation.RumOperation"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation datadog_rum_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

new rumOperation.RumOperation(scope: Construct, id: string, config: RumOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig">RumOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig">RumOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperation.RumOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.rumOperation.RumOperation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumOperation.RumOperation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.rumOperation.RumOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumOperation.RumOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.rumOperation.RumOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.rumOperation.RumOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.rumOperation.RumOperation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.rumOperation.RumOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.rumOperation.RumOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.rumOperation.RumOperation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumOperation.RumOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.rumOperation.RumOperation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.rumOperation.RumOperation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSteps` <a name="putSteps" id="@cdktn/provider-datadog.rumOperation.RumOperation.putSteps"></a>

```typescript
public putSteps(value: IResolvable | RumOperationSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperation.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>[]

---

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RumOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.rumOperation.RumOperation.isConstruct"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

rumOperation.RumOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperation.RumOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformElement"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

rumOperation.RumOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformResource"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

rumOperation.RumOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

rumOperation.RumOperation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RumOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RumOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RumOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RumOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList">RumOperationStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.stepsInput">stepsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.steps"></a>

```typescript
public readonly steps: RumOperationStepsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList">RumOperationStepsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | RumOperationSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RumOperationConfig <a name="RumOperationConfig" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

const rumOperationConfig: rumOperation.RumOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.applicationId">applicationId</a></code> | <code>string</code> | ID of the RUM application the operation belongs to. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.name">name</a></code> | <code>string</code> | Unique name of the operation within the organization. Must not contain spaces. Changing it recreates the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.steps">steps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>[]</code> | Ordered steps defining how RUM events drive the operation lifecycle. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.category">category</a></code> | <code>string</code> | Category of the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.description">description</a></code> | <code>string</code> | Description of the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.displayName">displayName</a></code> | <code>string</code> | Human readable name of the operation. Defaults to `name`. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags attached to the operation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

ID of the RUM application the operation belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#application_id RumOperation#application_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name of the operation within the organization. Must not contain spaces. Changing it recreates the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#name RumOperation#name}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.steps"></a>

```typescript
public readonly steps: IResolvable | RumOperationSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>[]

Ordered steps defining how RUM events drive the operation lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#steps RumOperation#steps}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Category of the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#category RumOperation#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#description RumOperation#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human readable name of the operation. Defaults to `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#display_name RumOperation#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags attached to the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#tags RumOperation#tags}

---

### RumOperationSteps <a name="RumOperationSteps" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

const rumOperationSteps: rumOperation.RumOperationSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.type">type</a></code> | <code>string</code> | Lifecycle transition triggered by this step. Valid values are `start`, `update`, `stop`, `error`, `abandoned`. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.composite">composite</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a></code> | Rule combining several predicates into this step. Exactly one of `nodes` or `composite` must be set. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.nodes">nodes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>[]</code> | Queries matched by this step. Exactly one of `nodes` or `composite` must be set. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Lifecycle transition triggered by this step. Valid values are `start`, `update`, `stop`, `error`, `abandoned`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#type RumOperation#type}

---

##### `composite`<sup>Optional</sup> <a name="composite" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.composite"></a>

```typescript
public readonly composite: RumOperationStepsComposite;
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a>

Rule combining several predicates into this step. Exactly one of `nodes` or `composite` must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#composite RumOperation#composite}

---

##### `nodes`<sup>Optional</sup> <a name="nodes" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.nodes"></a>

```typescript
public readonly nodes: IResolvable | RumOperationStepsNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>[]

Queries matched by this step. Exactly one of `nodes` or `composite` must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#nodes RumOperation#nodes}

---

### RumOperationStepsComposite <a name="RumOperationStepsComposite" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

const rumOperationStepsComposite: rumOperation.RumOperationStepsComposite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.kind">kind</a></code> | <code>string</code> | How the predicates combine. Valid values are `all_of`, `in_order`. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.predicates">predicates</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>[]</code> | Predicates combined by the rule. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.maxWindowMs">maxWindowMs</a></code> | <code>number</code> | Maximum time window, in milliseconds, in which all predicates must match. Value must be between 0 and 1800000. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

How the predicates combine. Valid values are `all_of`, `in_order`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#kind RumOperation#kind}

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.predicates"></a>

```typescript
public readonly predicates: IResolvable | RumOperationStepsCompositePredicates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>[]

Predicates combined by the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#predicates RumOperation#predicates}

---

##### `maxWindowMs`<sup>Optional</sup> <a name="maxWindowMs" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.maxWindowMs"></a>

```typescript
public readonly maxWindowMs: number;
```

- *Type:* number

Maximum time window, in milliseconds, in which all predicates must match. Value must be between 0 and 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#max_window_ms RumOperation#max_window_ms}

---

### RumOperationStepsCompositePredicates <a name="RumOperationStepsCompositePredicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

const rumOperationStepsCompositePredicates: rumOperation.RumOperationStepsCompositePredicates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates.property.query">query</a></code> | <code>string</code> | RUM event search query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

RUM event search query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#query RumOperation#query}

---

### RumOperationStepsNodes <a name="RumOperationStepsNodes" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

const rumOperationStepsNodes: rumOperation.RumOperationStepsNodes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes.property.query">query</a></code> | <code>string</code> | RUM event search query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

RUM event search query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#query RumOperation#query}

---

## Classes <a name="Classes" id="Classes"></a>

### RumOperationStepsCompositeOutputReference <a name="RumOperationStepsCompositeOutputReference" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

new rumOperation.RumOperationStepsCompositeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.putPredicates">putPredicates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resetMaxWindowMs">resetMaxWindowMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPredicates` <a name="putPredicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.putPredicates"></a>

```typescript
public putPredicates(value: IResolvable | RumOperationStepsCompositePredicates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.putPredicates.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>[]

---

##### `resetMaxWindowMs` <a name="resetMaxWindowMs" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resetMaxWindowMs"></a>

```typescript
public resetMaxWindowMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.predicates">predicates</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList">RumOperationStepsCompositePredicatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.maxWindowMsInput">maxWindowMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.predicatesInput">predicatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.maxWindowMs">maxWindowMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.predicates"></a>

```typescript
public readonly predicates: RumOperationStepsCompositePredicatesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList">RumOperationStepsCompositePredicatesList</a>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `maxWindowMsInput`<sup>Optional</sup> <a name="maxWindowMsInput" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.maxWindowMsInput"></a>

```typescript
public readonly maxWindowMsInput: number;
```

- *Type:* number

---

##### `predicatesInput`<sup>Optional</sup> <a name="predicatesInput" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.predicatesInput"></a>

```typescript
public readonly predicatesInput: IResolvable | RumOperationStepsCompositePredicates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `maxWindowMs`<sup>Required</sup> <a name="maxWindowMs" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.maxWindowMs"></a>

```typescript
public readonly maxWindowMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumOperationStepsComposite;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a>

---


### RumOperationStepsCompositePredicatesList <a name="RumOperationStepsCompositePredicatesList" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

new rumOperation.RumOperationStepsCompositePredicatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.get"></a>

```typescript
public get(index: number): RumOperationStepsCompositePredicatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumOperationStepsCompositePredicates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>[]

---


### RumOperationStepsCompositePredicatesOutputReference <a name="RumOperationStepsCompositePredicatesOutputReference" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

new rumOperation.RumOperationStepsCompositePredicatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumOperationStepsCompositePredicates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>

---


### RumOperationStepsList <a name="RumOperationStepsList" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

new rumOperation.RumOperationStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.get"></a>

```typescript
public get(index: number): RumOperationStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumOperationSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>[]

---


### RumOperationStepsNodesList <a name="RumOperationStepsNodesList" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

new rumOperation.RumOperationStepsNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.get"></a>

```typescript
public get(index: number): RumOperationStepsNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumOperationStepsNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>[]

---


### RumOperationStepsNodesOutputReference <a name="RumOperationStepsNodesOutputReference" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

new rumOperation.RumOperationStepsNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumOperationStepsNodes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>

---


### RumOperationStepsOutputReference <a name="RumOperationStepsOutputReference" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer"></a>

```typescript
import { rumOperation } from '@cdktn/provider-datadog'

new rumOperation.RumOperationStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putComposite">putComposite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putNodes">putNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resetComposite">resetComposite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resetNodes">resetNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComposite` <a name="putComposite" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putComposite"></a>

```typescript
public putComposite(value: RumOperationStepsComposite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putComposite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a>

---

##### `putNodes` <a name="putNodes" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putNodes"></a>

```typescript
public putNodes(value: IResolvable | RumOperationStepsNodes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putNodes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>[]

---

##### `resetComposite` <a name="resetComposite" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resetComposite"></a>

```typescript
public resetComposite(): void
```

##### `resetNodes` <a name="resetNodes" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resetNodes"></a>

```typescript
public resetNodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.composite">composite</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference">RumOperationStepsCompositeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList">RumOperationStepsNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.compositeInput">compositeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.nodesInput">nodesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `composite`<sup>Required</sup> <a name="composite" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.composite"></a>

```typescript
public readonly composite: RumOperationStepsCompositeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference">RumOperationStepsCompositeOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.nodes"></a>

```typescript
public readonly nodes: RumOperationStepsNodesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList">RumOperationStepsNodesList</a>

---

##### `compositeInput`<sup>Optional</sup> <a name="compositeInput" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.compositeInput"></a>

```typescript
public readonly compositeInput: IResolvable | RumOperationStepsComposite;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a>

---

##### `nodesInput`<sup>Optional</sup> <a name="nodesInput" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.nodesInput"></a>

```typescript
public readonly nodesInput: IResolvable | RumOperationStepsNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumOperationSteps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>

---



