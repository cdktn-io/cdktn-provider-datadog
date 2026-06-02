# `secureEmbedDashboard` Submodule <a name="`secureEmbedDashboard` Submodule" id="@cdktn/provider-datadog.secureEmbedDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureEmbedDashboard <a name="SecureEmbedDashboard" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard datadog_secure_embed_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

new secureEmbedDashboard.SecureEmbedDashboard(scope: Construct, id: string, config: SecureEmbedDashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig">SecureEmbedDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig">SecureEmbedDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars">putSelectableTemplateVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan">resetGlobalTimeLiveSpan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable">resetGlobalTimeSelectable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars">resetSelectableTemplateVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity">resetViewingPreferencesHighDensity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme">resetViewingPreferencesTheme</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSelectableTemplateVars` <a name="putSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars"></a>

```typescript
public putSelectableTemplateVars(value: IResolvable | SecureEmbedDashboardSelectableTemplateVars[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]

---

##### `resetGlobalTimeLiveSpan` <a name="resetGlobalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan"></a>

```typescript
public resetGlobalTimeLiveSpan(): void
```

##### `resetGlobalTimeSelectable` <a name="resetGlobalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable"></a>

```typescript
public resetGlobalTimeSelectable(): void
```

##### `resetSelectableTemplateVars` <a name="resetSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars"></a>

```typescript
public resetSelectableTemplateVars(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetViewingPreferencesHighDensity` <a name="resetViewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity"></a>

```typescript
public resetViewingPreferencesHighDensity(): void
```

##### `resetViewingPreferencesTheme` <a name="resetViewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme"></a>

```typescript
public resetViewingPreferencesTheme(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

secureEmbedDashboard.SecureEmbedDashboard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecureEmbedDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecureEmbedDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecureEmbedDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential">credential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars">selectableTemplateVars</a></code> | <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput">dashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput">globalTimeLiveSpanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput">globalTimeSelectableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput">selectableTemplateVarsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput">viewingPreferencesHighDensityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput">viewingPreferencesThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan">globalTimeLiveSpan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable">globalTimeSelectable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity">viewingPreferencesHighDensity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme">viewingPreferencesTheme</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential"></a>

```typescript
public readonly credential: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `selectableTemplateVars`<sup>Required</sup> <a name="selectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars"></a>

```typescript
public readonly selectableTemplateVars: SecureEmbedDashboardSelectableTemplateVarsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `dashboardIdInput`<sup>Optional</sup> <a name="dashboardIdInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput"></a>

```typescript
public readonly dashboardIdInput: string;
```

- *Type:* string

---

##### `globalTimeLiveSpanInput`<sup>Optional</sup> <a name="globalTimeLiveSpanInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput"></a>

```typescript
public readonly globalTimeLiveSpanInput: string;
```

- *Type:* string

---

##### `globalTimeSelectableInput`<sup>Optional</sup> <a name="globalTimeSelectableInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput"></a>

```typescript
public readonly globalTimeSelectableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `selectableTemplateVarsInput`<sup>Optional</sup> <a name="selectableTemplateVarsInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput"></a>

```typescript
public readonly selectableTemplateVarsInput: IResolvable | SecureEmbedDashboardSelectableTemplateVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `viewingPreferencesHighDensityInput`<sup>Optional</sup> <a name="viewingPreferencesHighDensityInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput"></a>

```typescript
public readonly viewingPreferencesHighDensityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `viewingPreferencesThemeInput`<sup>Optional</sup> <a name="viewingPreferencesThemeInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput"></a>

```typescript
public readonly viewingPreferencesThemeInput: string;
```

- *Type:* string

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `globalTimeLiveSpan`<sup>Required</sup> <a name="globalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan"></a>

```typescript
public readonly globalTimeLiveSpan: string;
```

- *Type:* string

---

##### `globalTimeSelectable`<sup>Required</sup> <a name="globalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable"></a>

```typescript
public readonly globalTimeSelectable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `viewingPreferencesHighDensity`<sup>Required</sup> <a name="viewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity"></a>

```typescript
public readonly viewingPreferencesHighDensity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `viewingPreferencesTheme`<sup>Required</sup> <a name="viewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme"></a>

```typescript
public readonly viewingPreferencesTheme: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureEmbedDashboardConfig <a name="SecureEmbedDashboardConfig" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.Initializer"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

const secureEmbedDashboardConfig: secureEmbedDashboard.SecureEmbedDashboardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId">dashboardId</a></code> | <code>string</code> | The ID of the dashboard to create a secure embed for. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title">title</a></code> | <code>string</code> | Title of the secure embed share. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan">globalTimeLiveSpan</a></code> | <code>string</code> | The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable">globalTimeSelectable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether viewers can change the global time range. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars">selectableTemplateVars</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]</code> | selectable_template_vars block. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status">status</a></code> | <code>string</code> | Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity">viewingPreferencesHighDensity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to display the dashboard in high density mode. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme">viewingPreferencesTheme</a></code> | <code>string</code> | Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The ID of the dashboard to create a secure embed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#dashboard_id SecureEmbedDashboard#dashboard_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title of the secure embed share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#title SecureEmbedDashboard#title}

---

##### `globalTimeLiveSpan`<sup>Optional</sup> <a name="globalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan"></a>

```typescript
public readonly globalTimeLiveSpan: string;
```

- *Type:* string

The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#global_time_live_span SecureEmbedDashboard#global_time_live_span}

---

##### `globalTimeSelectable`<sup>Optional</sup> <a name="globalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable"></a>

```typescript
public readonly globalTimeSelectable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether viewers can change the global time range. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#global_time_selectable SecureEmbedDashboard#global_time_selectable}

---

##### `selectableTemplateVars`<sup>Optional</sup> <a name="selectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars"></a>

```typescript
public readonly selectableTemplateVars: IResolvable | SecureEmbedDashboardSelectableTemplateVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]

selectable_template_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#selectable_template_vars SecureEmbedDashboard#selectable_template_vars}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#status SecureEmbedDashboard#status}

---

##### `viewingPreferencesHighDensity`<sup>Optional</sup> <a name="viewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity"></a>

```typescript
public readonly viewingPreferencesHighDensity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to display the dashboard in high density mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#viewing_preferences_high_density SecureEmbedDashboard#viewing_preferences_high_density}

---

##### `viewingPreferencesTheme`<sup>Optional</sup> <a name="viewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme"></a>

```typescript
public readonly viewingPreferencesTheme: string;
```

- *Type:* string

Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#viewing_preferences_theme SecureEmbedDashboard#viewing_preferences_theme}

---

### SecureEmbedDashboardSelectableTemplateVars <a name="SecureEmbedDashboardSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.Initializer"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

const secureEmbedDashboardSelectableTemplateVars: secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name">name</a></code> | <code>string</code> | The name of the template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues">defaultValues</a></code> | <code>string[]</code> | The default values for this template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix">prefix</a></code> | <code>string</code> | The tag prefix for this template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type">type</a></code> | <code>string</code> | The type of the template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags">visibleTags</a></code> | <code>string[]</code> | The visible tag values for this template variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#name SecureEmbedDashboard#name}

---

##### `defaultValues`<sup>Optional</sup> <a name="defaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues"></a>

```typescript
public readonly defaultValues: string[];
```

- *Type:* string[]

The default values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#default_values SecureEmbedDashboard#default_values}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The tag prefix for this template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#prefix SecureEmbedDashboard#prefix}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#type SecureEmbedDashboard#type}

---

##### `visibleTags`<sup>Optional</sup> <a name="visibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags"></a>

```typescript
public readonly visibleTags: string[];
```

- *Type:* string[]

The visible tag values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/secure_embed_dashboard#visible_tags SecureEmbedDashboard#visible_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### SecureEmbedDashboardSelectableTemplateVarsList <a name="SecureEmbedDashboardSelectableTemplateVarsList" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

new secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get"></a>

```typescript
public get(index: number): SecureEmbedDashboardSelectableTemplateVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecureEmbedDashboardSelectableTemplateVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]

---


### SecureEmbedDashboardSelectableTemplateVarsOutputReference <a name="SecureEmbedDashboardSelectableTemplateVarsOutputReference" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer"></a>

```typescript
import { secureEmbedDashboard } from '@cdktn/provider-datadog'

new secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues">resetDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags">resetVisibleTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValues` <a name="resetDefaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues"></a>

```typescript
public resetDefaultValues(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVisibleTags` <a name="resetVisibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags"></a>

```typescript
public resetVisibleTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput">defaultValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput">visibleTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues">defaultValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags">visibleTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValuesInput`<sup>Optional</sup> <a name="defaultValuesInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput"></a>

```typescript
public readonly defaultValuesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `visibleTagsInput`<sup>Optional</sup> <a name="visibleTagsInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput"></a>

```typescript
public readonly visibleTagsInput: string[];
```

- *Type:* string[]

---

##### `defaultValues`<sup>Required</sup> <a name="defaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues"></a>

```typescript
public readonly defaultValues: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `visibleTags`<sup>Required</sup> <a name="visibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags"></a>

```typescript
public readonly visibleTags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecureEmbedDashboardSelectableTemplateVars;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>

---



