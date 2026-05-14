# `securityMonitoringCriticalAsset` Submodule <a name="`securityMonitoringCriticalAsset` Submodule" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringCriticalAsset <a name="SecurityMonitoringCriticalAsset" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_monitoring_critical_asset datadog_security_monitoring_critical_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer"></a>

```typescript
import { securityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

new securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset(scope: Construct, id: string, config: SecurityMonitoringCriticalAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig">SecurityMonitoringCriticalAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig">SecurityMonitoringCriticalAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct"></a>

```typescript
import { securityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement"></a>

```typescript
import { securityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource"></a>

```typescript
import { securityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport"></a>

```typescript
import { securityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityMonitoringCriticalAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityMonitoringCriticalAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_monitoring_critical_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringCriticalAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQueryInput">ruleQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQuery">ruleQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `ruleQueryInput`<sup>Optional</sup> <a name="ruleQueryInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQueryInput"></a>

```typescript
public readonly ruleQueryInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQuery"></a>

```typescript
public readonly ruleQuery: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringCriticalAssetConfig <a name="SecurityMonitoringCriticalAssetConfig" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.Initializer"></a>

```typescript
import { securityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

const securityMonitoringCriticalAssetConfig: securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.query">query</a></code> | <code>string</code> | The query used to match a critical asset and the associated signals. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.ruleQuery">ruleQuery</a></code> | <code>string</code> | The rule query to filter which detection rules this critical asset applies to. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.severity">severity</a></code> | <code>string</code> | The severity change applied to signals matching this critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the critical asset is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tags associated with the critical asset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query used to match a critical asset and the associated signals.

Uses the same syntax as the search bar in the Security Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_monitoring_critical_asset#query SecurityMonitoringCriticalAsset#query}

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.ruleQuery"></a>

```typescript
public readonly ruleQuery: string;
```

- *Type:* string

The rule query to filter which detection rules this critical asset applies to.

Uses the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_monitoring_critical_asset#rule_query SecurityMonitoringCriticalAsset#rule_query}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The severity change applied to signals matching this critical asset.

Valid values are `critical`, `high`, `medium`, `low`, `info`, `no-op`, `increase`, `decrease`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_monitoring_critical_asset#severity SecurityMonitoringCriticalAsset#severity}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the critical asset is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_monitoring_critical_asset#enabled SecurityMonitoringCriticalAsset#enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags associated with the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_monitoring_critical_asset#tags SecurityMonitoringCriticalAsset#tags}

---



