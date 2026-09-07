# `statusPageDegradationTemplate` Submodule <a name="`statusPageDegradationTemplate` Submodule" id="@cdktn/provider-datadog.statusPageDegradationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageDegradationTemplate <a name="StatusPageDegradationTemplate" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template datadog_status_page_degradation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

new statusPageDegradationTemplate.StatusPageDegradationTemplate(scope: Construct, id: string, config: StatusPageDegradationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig">StatusPageDegradationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig">StatusPageDegradationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected">putComponentsAffected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates">putUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected">resetComponentsAffected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle">resetDegradationTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates">resetUpdates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentsAffected` <a name="putComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected"></a>

```typescript
public putComponentsAffected(value: IResolvable | StatusPageDegradationTemplateComponentsAffected[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]

---

##### `putUpdates` <a name="putUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates"></a>

```typescript
public putUpdates(value: IResolvable | StatusPageDegradationTemplateUpdates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]

---

##### `resetComponentsAffected` <a name="resetComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected"></a>

```typescript
public resetComponentsAffected(): void
```

##### `resetDegradationTitle` <a name="resetDegradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle"></a>

```typescript
public resetDegradationTitle(): void
```

##### `resetUpdates` <a name="resetUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates"></a>

```typescript
public resetUpdates(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StatusPageDegradationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StatusPageDegradationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageDegradationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected">componentsAffected</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates">updates</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput">componentsAffectedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput">degradationTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput">pageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput">updatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle">degradationTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId">pageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `componentsAffected`<sup>Required</sup> <a name="componentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected"></a>

```typescript
public readonly componentsAffected: StatusPageDegradationTemplateComponentsAffectedList;
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `updates`<sup>Required</sup> <a name="updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates"></a>

```typescript
public readonly updates: StatusPageDegradationTemplateUpdatesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a>

---

##### `componentsAffectedInput`<sup>Optional</sup> <a name="componentsAffectedInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput"></a>

```typescript
public readonly componentsAffectedInput: IResolvable | StatusPageDegradationTemplateComponentsAffected[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]

---

##### `degradationTitleInput`<sup>Optional</sup> <a name="degradationTitleInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput"></a>

```typescript
public readonly degradationTitleInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput"></a>

```typescript
public readonly pageIdInput: string;
```

- *Type:* string

---

##### `updatesInput`<sup>Optional</sup> <a name="updatesInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput"></a>

```typescript
public readonly updatesInput: IResolvable | StatusPageDegradationTemplateUpdates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]

---

##### `degradationTitle`<sup>Required</sup> <a name="degradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle"></a>

```typescript
public readonly degradationTitle: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageDegradationTemplateComponentsAffected <a name="StatusPageDegradationTemplateComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.Initializer"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

const statusPageDegradationTemplateComponentsAffected: statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id">id</a></code> | <code>string</code> | The ID of the affected component. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status">status</a></code> | <code>string</code> | The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name">name</a></code> | <code>string</code> | The name of the affected component. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#id StatusPageDegradationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

### StatusPageDegradationTemplateConfig <a name="StatusPageDegradationTemplateConfig" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.Initializer"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

const statusPageDegradationTemplateConfig: statusPageDegradationTemplate.StatusPageDegradationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId">pageId</a></code> | <code>string</code> | The ID of the status page this degradation template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected">componentsAffected</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]</code> | The components affected by a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle">degradationTitle</a></code> | <code>string</code> | The title used for a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates">updates</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]</code> | The pre-filled updates for a degradation created from this template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#page_id StatusPageDegradationTemplate#page_id}

---

##### `componentsAffected`<sup>Optional</sup> <a name="componentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected"></a>

```typescript
public readonly componentsAffected: IResolvable | StatusPageDegradationTemplateComponentsAffected[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]

The components affected by a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#components_affected StatusPageDegradationTemplate#components_affected}

---

##### `degradationTitle`<sup>Optional</sup> <a name="degradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle"></a>

```typescript
public readonly degradationTitle: string;
```

- *Type:* string

The title used for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#degradation_title StatusPageDegradationTemplate#degradation_title}

---

##### `updates`<sup>Optional</sup> <a name="updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates"></a>

```typescript
public readonly updates: IResolvable | StatusPageDegradationTemplateUpdates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]

The pre-filled updates for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#updates StatusPageDegradationTemplate#updates}

---

### StatusPageDegradationTemplateUpdates <a name="StatusPageDegradationTemplateUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.Initializer"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

const statusPageDegradationTemplateUpdates: statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status">status</a></code> | <code>string</code> | The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message">message</a></code> | <code>string</code> | The pre-filled message for this update. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The pre-filled message for this update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#message StatusPageDegradationTemplate#message}

---

## Classes <a name="Classes" id="Classes"></a>

### StatusPageDegradationTemplateComponentsAffectedList <a name="StatusPageDegradationTemplateComponentsAffectedList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

new statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get"></a>

```typescript
public get(index: number): StatusPageDegradationTemplateComponentsAffectedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatusPageDegradationTemplateComponentsAffected[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]

---


### StatusPageDegradationTemplateComponentsAffectedOutputReference <a name="StatusPageDegradationTemplateComponentsAffectedOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

new statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatusPageDegradationTemplateComponentsAffected;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>

---


### StatusPageDegradationTemplateUpdatesList <a name="StatusPageDegradationTemplateUpdatesList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

new statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get"></a>

```typescript
public get(index: number): StatusPageDegradationTemplateUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatusPageDegradationTemplateUpdates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]

---


### StatusPageDegradationTemplateUpdatesOutputReference <a name="StatusPageDegradationTemplateUpdatesOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer"></a>

```typescript
import { statusPageDegradationTemplate } from '@cdktn/provider-datadog'

new statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StatusPageDegradationTemplateUpdates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>

---



