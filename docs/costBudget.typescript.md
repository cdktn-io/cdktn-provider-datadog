# `costBudget` Submodule <a name="`costBudget` Submodule" id="@cdktn/provider-datadog.costBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostBudget <a name="CostBudget" id="@cdktn/provider-datadog.costBudget.CostBudget"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget datadog_cost_budget}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudget(scope: Construct, id: string, config: CostBudgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig">CostBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig">CostBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.putBudgetLine">putBudgetLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.resetBudgetLine">resetBudgetLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.resetEntries">resetEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.costBudget.CostBudget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.costBudget.CostBudget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.costBudget.CostBudget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.costBudget.CostBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.costBudget.CostBudget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.costBudget.CostBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.costBudget.CostBudget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.costBudget.CostBudget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.costBudget.CostBudget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.costBudget.CostBudget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.costBudget.CostBudget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.costBudget.CostBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.costBudget.CostBudget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.costBudget.CostBudget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.costBudget.CostBudget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.costBudget.CostBudget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.costBudget.CostBudget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.costBudget.CostBudget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBudgetLine` <a name="putBudgetLine" id="@cdktn/provider-datadog.costBudget.CostBudget.putBudgetLine"></a>

```typescript
public putBudgetLine(value: IResolvable | CostBudgetBudgetLine[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudget.putBudgetLine.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>[]

---

##### `putEntries` <a name="putEntries" id="@cdktn/provider-datadog.costBudget.CostBudget.putEntries"></a>

```typescript
public putEntries(value: IResolvable | CostBudgetEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudget.putEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---

##### `resetBudgetLine` <a name="resetBudgetLine" id="@cdktn/provider-datadog.costBudget.CostBudget.resetBudgetLine"></a>

```typescript
public resetBudgetLine(): void
```

##### `resetEntries` <a name="resetEntries" id="@cdktn/provider-datadog.costBudget.CostBudget.resetEntries"></a>

```typescript
public resetEntries(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.costBudget.CostBudget.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CostBudget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.costBudget.CostBudget.isConstruct"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

costBudget.CostBudget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costBudget.CostBudget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.costBudget.CostBudget.isTerraformElement"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

costBudget.CostBudget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costBudget.CostBudget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.costBudget.CostBudget.isTerraformResource"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

costBudget.CostBudget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costBudget.CostBudget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

costBudget.CostBudget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CostBudget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CostBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.budgetLine">budgetLine</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList">CostBudgetBudgetLineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList">CostBudgetEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.totalAmount">totalAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.budgetLineInput">budgetLineInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.endMonthInput">endMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.entriesInput">entriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.metricsQueryInput">metricsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.startMonthInput">startMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.endMonth">endMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.metricsQuery">metricsQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.startMonth">startMonth</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.costBudget.CostBudget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.costBudget.CostBudget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.costBudget.CostBudget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.costBudget.CostBudget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.costBudget.CostBudget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.costBudget.CostBudget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.costBudget.CostBudget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.costBudget.CostBudget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.costBudget.CostBudget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.costBudget.CostBudget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.costBudget.CostBudget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.costBudget.CostBudget.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `budgetLine`<sup>Required</sup> <a name="budgetLine" id="@cdktn/provider-datadog.costBudget.CostBudget.property.budgetLine"></a>

```typescript
public readonly budgetLine: CostBudgetBudgetLineList;
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList">CostBudgetBudgetLineList</a>

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-datadog.costBudget.CostBudget.property.entries"></a>

```typescript
public readonly entries: CostBudgetEntriesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList">CostBudgetEntriesList</a>

---

##### `totalAmount`<sup>Required</sup> <a name="totalAmount" id="@cdktn/provider-datadog.costBudget.CostBudget.property.totalAmount"></a>

```typescript
public readonly totalAmount: number;
```

- *Type:* number

---

##### `budgetLineInput`<sup>Optional</sup> <a name="budgetLineInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.budgetLineInput"></a>

```typescript
public readonly budgetLineInput: IResolvable | CostBudgetBudgetLine[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>[]

---

##### `endMonthInput`<sup>Optional</sup> <a name="endMonthInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.endMonthInput"></a>

```typescript
public readonly endMonthInput: number;
```

- *Type:* number

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | CostBudgetEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricsQueryInput`<sup>Optional</sup> <a name="metricsQueryInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.metricsQueryInput"></a>

```typescript
public readonly metricsQueryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startMonthInput`<sup>Optional</sup> <a name="startMonthInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.startMonthInput"></a>

```typescript
public readonly startMonthInput: number;
```

- *Type:* number

---

##### `endMonth`<sup>Required</sup> <a name="endMonth" id="@cdktn/provider-datadog.costBudget.CostBudget.property.endMonth"></a>

```typescript
public readonly endMonth: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktn/provider-datadog.costBudget.CostBudget.property.metricsQuery"></a>

```typescript
public readonly metricsQuery: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.costBudget.CostBudget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startMonth`<sup>Required</sup> <a name="startMonth" id="@cdktn/provider-datadog.costBudget.CostBudget.property.startMonth"></a>

```typescript
public readonly startMonth: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.costBudget.CostBudget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostBudgetBudgetLine <a name="CostBudgetBudgetLine" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

const costBudgetBudgetLine: costBudget.CostBudgetBudgetLine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.amounts">amounts</a></code> | <code>{[ key: string ]: number}</code> | Map of month (YYYYMM) to budget amount. Example: {"202601": 1000.0, "202602": 1200.0}. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.childTagFilters">childTagFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>[]</code> | child_tag_filters block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.parentTagFilters">parentTagFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>[]</code> | parent_tag_filters block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.tagFilters">tagFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>[]</code> | tag_filters block. |

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.amounts"></a>

```typescript
public readonly amounts: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Map of month (YYYYMM) to budget amount. Example: {"202601": 1000.0, "202602": 1200.0}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#amounts CostBudget#amounts}

---

##### `childTagFilters`<sup>Optional</sup> <a name="childTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.childTagFilters"></a>

```typescript
public readonly childTagFilters: IResolvable | CostBudgetBudgetLineChildTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>[]

child_tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#child_tag_filters CostBudget#child_tag_filters}

---

##### `parentTagFilters`<sup>Optional</sup> <a name="parentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.parentTagFilters"></a>

```typescript
public readonly parentTagFilters: IResolvable | CostBudgetBudgetLineParentTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>[]

parent_tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#parent_tag_filters CostBudget#parent_tag_filters}

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.tagFilters"></a>

```typescript
public readonly tagFilters: IResolvable | CostBudgetBudgetLineTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>[]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_filters CostBudget#tag_filters}

---

### CostBudgetBudgetLineChildTagFilters <a name="CostBudgetBudgetLineChildTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

const costBudgetBudgetLineChildTagFilters: costBudget.CostBudgetBudgetLineChildTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.property.tagKey">tagKey</a></code> | <code>string</code> | Must be one of the tags from the `metrics_query`. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Must be one of the tags from the `metrics_query`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

### CostBudgetBudgetLineParentTagFilters <a name="CostBudgetBudgetLineParentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

const costBudgetBudgetLineParentTagFilters: costBudget.CostBudgetBudgetLineParentTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.property.tagKey">tagKey</a></code> | <code>string</code> | Must be one of the tags from the `metrics_query`. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Must be one of the tags from the `metrics_query`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

### CostBudgetBudgetLineTagFilters <a name="CostBudgetBudgetLineTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

const costBudgetBudgetLineTagFilters: costBudget.CostBudgetBudgetLineTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.property.tagKey">tagKey</a></code> | <code>string</code> | Must be one of the tags from the `metrics_query`. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Must be one of the tags from the `metrics_query`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

### CostBudgetConfig <a name="CostBudgetConfig" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

const costBudgetConfig: costBudget.CostBudgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.endMonth">endMonth</a></code> | <code>number</code> | The month when the budget ends (YYYYMM). |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.metricsQuery">metricsQuery</a></code> | <code>string</code> | The cost query used to track against the budget. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.name">name</a></code> | <code>string</code> | The name of the budget. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.startMonth">startMonth</a></code> | <code>number</code> | The month when the budget starts (YYYYMM). |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.budgetLine">budgetLine</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>[]</code> | budget_line block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.entries">entries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | entries block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.id">id</a></code> | <code>string</code> | The ID of the budget. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endMonth`<sup>Required</sup> <a name="endMonth" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.endMonth"></a>

```typescript
public readonly endMonth: number;
```

- *Type:* number

The month when the budget ends (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#end_month CostBudget#end_month}

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.metricsQuery"></a>

```typescript
public readonly metricsQuery: string;
```

- *Type:* string

The cost query used to track against the budget.

**Note:** For hierarchical budgets using `by {tag1,tag2}`, the order of tags determines the UI hierarchy (parent, child).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#metrics_query CostBudget#metrics_query}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#name CostBudget#name}

---

##### `startMonth`<sup>Required</sup> <a name="startMonth" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.startMonth"></a>

```typescript
public readonly startMonth: number;
```

- *Type:* number

The month when the budget starts (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#start_month CostBudget#start_month}

---

##### `budgetLine`<sup>Optional</sup> <a name="budgetLine" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.budgetLine"></a>

```typescript
public readonly budgetLine: IResolvable | CostBudgetBudgetLine[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>[]

budget_line block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#budget_line CostBudget#budget_line}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.entries"></a>

```typescript
public readonly entries: IResolvable | CostBudgetEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#entries CostBudget#entries}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#id CostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CostBudgetEntries <a name="CostBudgetEntries" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

const costBudgetEntries: costBudget.CostBudgetEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.amount">amount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#amount CostBudget#amount}. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.month">month</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#month CostBudget#month}. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.tagFilters">tagFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | tag_filters block. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#amount CostBudget#amount}.

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#month CostBudget#month}.

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.tagFilters"></a>

```typescript
public readonly tagFilters: IResolvable | CostBudgetEntriesTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_filters CostBudget#tag_filters}

---

### CostBudgetEntriesTagFilters <a name="CostBudgetEntriesTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

const costBudgetEntriesTagFilters: costBudget.CostBudgetEntriesTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagKey">tagKey</a></code> | <code>string</code> | **Note:** Must be one of the tags from the `metrics_query`. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

**Note:** Must be one of the tags from the `metrics_query`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostBudgetBudgetLineChildTagFiltersList <a name="CostBudgetBudgetLineChildTagFiltersList" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetBudgetLineChildTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.get"></a>

```typescript
public get(index: number): CostBudgetBudgetLineChildTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetBudgetLineChildTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>[]

---


### CostBudgetBudgetLineChildTagFiltersOutputReference <a name="CostBudgetBudgetLineChildTagFiltersOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetBudgetLineChildTagFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>

---


### CostBudgetBudgetLineList <a name="CostBudgetBudgetLineList" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetBudgetLineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.get"></a>

```typescript
public get(index: number): CostBudgetBudgetLineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetBudgetLine[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>[]

---


### CostBudgetBudgetLineOutputReference <a name="CostBudgetBudgetLineOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetBudgetLineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putChildTagFilters">putChildTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putParentTagFilters">putParentTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetChildTagFilters">resetChildTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetParentTagFilters">resetParentTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChildTagFilters` <a name="putChildTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putChildTagFilters"></a>

```typescript
public putChildTagFilters(value: IResolvable | CostBudgetBudgetLineChildTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putChildTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>[]

---

##### `putParentTagFilters` <a name="putParentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putParentTagFilters"></a>

```typescript
public putParentTagFilters(value: IResolvable | CostBudgetBudgetLineParentTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putParentTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>[]

---

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putTagFilters"></a>

```typescript
public putTagFilters(value: IResolvable | CostBudgetBudgetLineTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>[]

---

##### `resetChildTagFilters` <a name="resetChildTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetChildTagFilters"></a>

```typescript
public resetChildTagFilters(): void
```

##### `resetParentTagFilters` <a name="resetParentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetParentTagFilters"></a>

```typescript
public resetParentTagFilters(): void
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetTagFilters"></a>

```typescript
public resetTagFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.childTagFilters">childTagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList">CostBudgetBudgetLineChildTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.parentTagFilters">parentTagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList">CostBudgetBudgetLineParentTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList">CostBudgetBudgetLineTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.amountsInput">amountsInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.childTagFiltersInput">childTagFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.parentTagFiltersInput">parentTagFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.amounts">amounts</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childTagFilters`<sup>Required</sup> <a name="childTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.childTagFilters"></a>

```typescript
public readonly childTagFilters: CostBudgetBudgetLineChildTagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList">CostBudgetBudgetLineChildTagFiltersList</a>

---

##### `parentTagFilters`<sup>Required</sup> <a name="parentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.parentTagFilters"></a>

```typescript
public readonly parentTagFilters: CostBudgetBudgetLineParentTagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList">CostBudgetBudgetLineParentTagFiltersList</a>

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.tagFilters"></a>

```typescript
public readonly tagFilters: CostBudgetBudgetLineTagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList">CostBudgetBudgetLineTagFiltersList</a>

---

##### `amountsInput`<sup>Optional</sup> <a name="amountsInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.amountsInput"></a>

```typescript
public readonly amountsInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `childTagFiltersInput`<sup>Optional</sup> <a name="childTagFiltersInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.childTagFiltersInput"></a>

```typescript
public readonly childTagFiltersInput: IResolvable | CostBudgetBudgetLineChildTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>[]

---

##### `parentTagFiltersInput`<sup>Optional</sup> <a name="parentTagFiltersInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.parentTagFiltersInput"></a>

```typescript
public readonly parentTagFiltersInput: IResolvable | CostBudgetBudgetLineParentTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>[]

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.tagFiltersInput"></a>

```typescript
public readonly tagFiltersInput: IResolvable | CostBudgetBudgetLineTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>[]

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.amounts"></a>

```typescript
public readonly amounts: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetBudgetLine;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>

---


### CostBudgetBudgetLineParentTagFiltersList <a name="CostBudgetBudgetLineParentTagFiltersList" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetBudgetLineParentTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.get"></a>

```typescript
public get(index: number): CostBudgetBudgetLineParentTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetBudgetLineParentTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>[]

---


### CostBudgetBudgetLineParentTagFiltersOutputReference <a name="CostBudgetBudgetLineParentTagFiltersOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetBudgetLineParentTagFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>

---


### CostBudgetBudgetLineTagFiltersList <a name="CostBudgetBudgetLineTagFiltersList" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetBudgetLineTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.get"></a>

```typescript
public get(index: number): CostBudgetBudgetLineTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetBudgetLineTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>[]

---


### CostBudgetBudgetLineTagFiltersOutputReference <a name="CostBudgetBudgetLineTagFiltersOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetBudgetLineTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetBudgetLineTagFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>

---


### CostBudgetEntriesList <a name="CostBudgetEntriesList" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.get"></a>

```typescript
public get(index: number): CostBudgetEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---


### CostBudgetEntriesOutputReference <a name="CostBudgetEntriesOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters"></a>

```typescript
public putTagFilters(value: IResolvable | CostBudgetEntriesTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resetTagFilters"></a>

```typescript
public resetTagFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList">CostBudgetEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFilters"></a>

```typescript
public readonly tagFilters: CostBudgetEntriesTagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList">CostBudgetEntriesTagFiltersList</a>

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFiltersInput"></a>

```typescript
public readonly tagFiltersInput: IResolvable | CostBudgetEntriesTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetEntries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>

---


### CostBudgetEntriesTagFiltersList <a name="CostBudgetEntriesTagFiltersList" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetEntriesTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get"></a>

```typescript
public get(index: number): CostBudgetEntriesTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetEntriesTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---


### CostBudgetEntriesTagFiltersOutputReference <a name="CostBudgetEntriesTagFiltersOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer"></a>

```typescript
import { costBudget } from '@cdktn/provider-datadog'

new costBudget.CostBudgetEntriesTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetEntriesTagFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>

---



