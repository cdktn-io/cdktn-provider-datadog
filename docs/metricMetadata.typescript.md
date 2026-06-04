# `metricMetadata` Submodule <a name="`metricMetadata` Submodule" id="@cdktn/provider-datadog.metricMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetricMetadata <a name="MetricMetadata" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata datadog_metric_metadata}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.Initializer"></a>

```typescript
import { metricMetadata } from '@cdktn/provider-datadog'

new metricMetadata.MetricMetadata(scope: Construct, id: string, config: MetricMetadataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig">MetricMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig">MetricMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetPerUnit">resetPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetStatsdInterval">resetStatsdInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPerUnit` <a name="resetPerUnit" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetPerUnit"></a>

```typescript
public resetPerUnit(): void
```

##### `resetShortName` <a name="resetShortName" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetShortName"></a>

```typescript
public resetShortName(): void
```

##### `resetStatsdInterval` <a name="resetStatsdInterval" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetStatsdInterval"></a>

```typescript
public resetStatsdInterval(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.resetUnit"></a>

```typescript
public resetUnit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MetricMetadata resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.isConstruct"></a>

```typescript
import { metricMetadata } from '@cdktn/provider-datadog'

metricMetadata.MetricMetadata.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement"></a>

```typescript
import { metricMetadata } from '@cdktn/provider-datadog'

metricMetadata.MetricMetadata.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource"></a>

```typescript
import { metricMetadata } from '@cdktn/provider-datadog'

metricMetadata.MetricMetadata.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport"></a>

```typescript
import { metricMetadata } from '@cdktn/provider-datadog'

metricMetadata.MetricMetadata.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MetricMetadata resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MetricMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MetricMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MetricMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.perUnitInput">perUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.shortNameInput">shortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.statsdIntervalInput">statsdIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.perUnit">perUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.statsdInterval">statsdInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.unit">unit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `perUnitInput`<sup>Optional</sup> <a name="perUnitInput" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.perUnitInput"></a>

```typescript
public readonly perUnitInput: string;
```

- *Type:* string

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.shortNameInput"></a>

```typescript
public readonly shortNameInput: string;
```

- *Type:* string

---

##### `statsdIntervalInput`<sup>Optional</sup> <a name="statsdIntervalInput" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.statsdIntervalInput"></a>

```typescript
public readonly statsdIntervalInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `perUnit`<sup>Required</sup> <a name="perUnit" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.perUnit"></a>

```typescript
public readonly perUnit: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `statsdInterval`<sup>Required</sup> <a name="statsdInterval" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.statsdInterval"></a>

```typescript
public readonly statsdInterval: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.metricMetadata.MetricMetadata.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MetricMetadataConfig <a name="MetricMetadataConfig" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.Initializer"></a>

```typescript
import { metricMetadata } from '@cdktn/provider-datadog'

const metricMetadataConfig: metricMetadata.MetricMetadataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.metric">metric</a></code> | <code>string</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.description">description</a></code> | <code>string</code> | A description of the metric. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#id MetricMetadata#id}. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.perUnit">perUnit</a></code> | <code>string</code> | Per unit of the metric such as `second` in `bytes per second`. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.shortName">shortName</a></code> | <code>string</code> | A short name of the metric. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.statsdInterval">statsdInterval</a></code> | <code>number</code> | If applicable, statsd flush interval in seconds for the metric. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.type">type</a></code> | <code>string</code> | Metric type such as `count`, `gauge`, or `rate`. |
| <code><a href="#@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.unit">unit</a></code> | <code>string</code> | Primary unit of the metric such as `byte` or `operation`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#metric MetricMetadata#metric}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#description MetricMetadata#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#id MetricMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perUnit`<sup>Optional</sup> <a name="perUnit" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.perUnit"></a>

```typescript
public readonly perUnit: string;
```

- *Type:* string

Per unit of the metric such as `second` in `bytes per second`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#per_unit MetricMetadata#per_unit}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

A short name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#short_name MetricMetadata#short_name}

---

##### `statsdInterval`<sup>Optional</sup> <a name="statsdInterval" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.statsdInterval"></a>

```typescript
public readonly statsdInterval: number;
```

- *Type:* number

If applicable, statsd flush interval in seconds for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#statsd_interval MetricMetadata#statsd_interval}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Metric type such as `count`, `gauge`, or `rate`.

Updating a metric of type `distribution` is not supported. If you would like to see the `distribution` type returned, contact [Datadog support](https://docs.datadoghq.com/help/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#type MetricMetadata#type}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-datadog.metricMetadata.MetricMetadataConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Primary unit of the metric such as `byte` or `operation`.

For a list of allowed units, refer to [Datadog metric unit documentation](https://docs.datadoghq.com/metrics/units/#unit-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/metric_metadata#unit MetricMetadata#unit}

---



