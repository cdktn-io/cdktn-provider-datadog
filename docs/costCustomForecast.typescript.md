# `costCustomForecast` Submodule <a name="`costCustomForecast` Submodule" id="@cdktn/provider-datadog.costCustomForecast"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostCustomForecast <a name="CostCustomForecast" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast datadog_cost_custom_forecast}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.Initializer"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

new costCustomForecast.CostCustomForecast(scope: Construct, id: string, config: CostCustomForecastConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig">CostCustomForecastConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig">CostCustomForecastConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.resetEntries">resetEntries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntries` <a name="putEntries" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.putEntries"></a>

```typescript
public putEntries(value: IResolvable | CostCustomForecastEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.putEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a>[]

---

##### `resetEntries` <a name="resetEntries" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.resetEntries"></a>

```typescript
public resetEntries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CostCustomForecast resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isConstruct"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

costCustomForecast.CostCustomForecast.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isTerraformElement"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

costCustomForecast.CostCustomForecast.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isTerraformResource"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

costCustomForecast.CostCustomForecast.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.generateConfigForImport"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

costCustomForecast.CostCustomForecast.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CostCustomForecast resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostCustomForecast to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostCustomForecast that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CostCustomForecast to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList">CostCustomForecastEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.budgetUidInput">budgetUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.entriesInput">entriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.budgetUid">budgetUid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.entries"></a>

```typescript
public readonly entries: CostCustomForecastEntriesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList">CostCustomForecastEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `budgetUidInput`<sup>Optional</sup> <a name="budgetUidInput" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.budgetUidInput"></a>

```typescript
public readonly budgetUidInput: string;
```

- *Type:* string

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | CostCustomForecastEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a>[]

---

##### `budgetUid`<sup>Required</sup> <a name="budgetUid" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.budgetUid"></a>

```typescript
public readonly budgetUid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecast.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostCustomForecastConfig <a name="CostCustomForecastConfig" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.Initializer"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

const costCustomForecastConfig: costCustomForecast.CostCustomForecastConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.budgetUid">budgetUid</a></code> | <code>string</code> | The UUID of the budget that this custom forecast belongs to. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.entries">entries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a>[]</code> | entries block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `budgetUid`<sup>Required</sup> <a name="budgetUid" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.budgetUid"></a>

```typescript
public readonly budgetUid: string;
```

- *Type:* string

The UUID of the budget that this custom forecast belongs to.

Changing this value forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#budget_uid CostCustomForecast#budget_uid}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastConfig.property.entries"></a>

```typescript
public readonly entries: IResolvable | CostCustomForecastEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a>[]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#entries CostCustomForecast#entries}

---

### CostCustomForecastEntries <a name="CostCustomForecastEntries" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries.Initializer"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

const costCustomForecastEntries: costCustomForecast.CostCustomForecastEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries.property.amount">amount</a></code> | <code>number</code> | The forecast override amount for the month. Value must be at least 0.000000. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries.property.month">month</a></code> | <code>number</code> | The month the entry applies to, in `YYYYMM` format. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries.property.tagFilters">tagFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a>[]</code> | tag_filters block. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

The forecast override amount for the month. Value must be at least 0.000000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#amount CostCustomForecast#amount}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

The month the entry applies to, in `YYYYMM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#month CostCustomForecast#month}

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries.property.tagFilters"></a>

```typescript
public readonly tagFilters: IResolvable | CostCustomForecastEntriesTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a>[]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#tag_filters CostCustomForecast#tag_filters}

---

### CostCustomForecastEntriesTagFilters <a name="CostCustomForecastEntriesTagFilters" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters.Initializer"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

const costCustomForecastEntriesTagFilters: costCustomForecast.CostCustomForecastEntriesTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#tag_key CostCustomForecast#tag_key}. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#tag_value CostCustomForecast#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#tag_key CostCustomForecast#tag_key}.

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cost_custom_forecast#tag_value CostCustomForecast#tag_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostCustomForecastEntriesList <a name="CostCustomForecastEntriesList" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.Initializer"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

new costCustomForecast.CostCustomForecastEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.get"></a>

```typescript
public get(index: number): CostCustomForecastEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostCustomForecastEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a>[]

---


### CostCustomForecastEntriesOutputReference <a name="CostCustomForecastEntriesOutputReference" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

new costCustomForecast.CostCustomForecastEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.putTagFilters"></a>

```typescript
public putTagFilters(value: IResolvable | CostCustomForecastEntriesTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a>[]

---

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.resetTagFilters"></a>

```typescript
public resetTagFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList">CostCustomForecastEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.tagFilters"></a>

```typescript
public readonly tagFilters: CostCustomForecastEntriesTagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList">CostCustomForecastEntriesTagFiltersList</a>

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.tagFiltersInput"></a>

```typescript
public readonly tagFiltersInput: IResolvable | CostCustomForecastEntriesTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a>[]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostCustomForecastEntries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntries">CostCustomForecastEntries</a>

---


### CostCustomForecastEntriesTagFiltersList <a name="CostCustomForecastEntriesTagFiltersList" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.Initializer"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

new costCustomForecast.CostCustomForecastEntriesTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.get"></a>

```typescript
public get(index: number): CostCustomForecastEntriesTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostCustomForecastEntriesTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a>[]

---


### CostCustomForecastEntriesTagFiltersOutputReference <a name="CostCustomForecastEntriesTagFiltersOutputReference" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer"></a>

```typescript
import { costCustomForecast } from '@cdktn/provider-datadog'

new costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostCustomForecastEntriesTagFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costCustomForecast.CostCustomForecastEntriesTagFilters">CostCustomForecastEntriesTagFilters</a>

---



