# `fleetSchedule` Submodule <a name="`fleetSchedule` Submodule" id="@cdktn/provider-datadog.fleetSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetSchedule <a name="FleetSchedule" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule datadog_fleet_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer"></a>

```typescript
import { fleetSchedule } from '@cdktn/provider-datadog'

new fleetSchedule.FleetSchedule(scope: Construct, id: string, config: FleetScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig">FleetScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig">FleetScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetVersionToLatest">resetVersionToLatest</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule"></a>

```typescript
public putRule(value: FleetScheduleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a>

---

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetVersionToLatest` <a name="resetVersionToLatest" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetVersionToLatest"></a>

```typescript
public resetVersionToLatest(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FleetSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isConstruct"></a>

```typescript
import { fleetSchedule } from '@cdktn/provider-datadog'

fleetSchedule.FleetSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformElement"></a>

```typescript
import { fleetSchedule } from '@cdktn/provider-datadog'

fleetSchedule.FleetSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformResource"></a>

```typescript
import { fleetSchedule } from '@cdktn/provider-datadog'

fleetSchedule.FleetSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport"></a>

```typescript
import { fleetSchedule } from '@cdktn/provider-datadog'

fleetSchedule.FleetSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FleetSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FleetSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference">FleetScheduleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.versionToLatestInput">versionToLatestInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.versionToLatest">versionToLatest</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.rule"></a>

```typescript
public readonly rule: FleetScheduleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference">FleetScheduleRuleOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | FleetScheduleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `versionToLatestInput`<sup>Optional</sup> <a name="versionToLatestInput" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.versionToLatestInput"></a>

```typescript
public readonly versionToLatestInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `versionToLatest`<sup>Required</sup> <a name="versionToLatest" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.versionToLatest"></a>

```typescript
public readonly versionToLatest: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetScheduleConfig <a name="FleetScheduleConfig" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.Initializer"></a>

```typescript
import { fleetSchedule } from '@cdktn/provider-datadog'

const fleetScheduleConfig: fleetSchedule.FleetScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.name">name</a></code> | <code>string</code> | Human-readable name for the schedule. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.query">query</a></code> | <code>string</code> | Datadog host query used to select the Agent upgrade targets. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a></code> | Weekly recurrence and maintenance-window configuration for the schedule. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.status">status</a></code> | <code>string</code> | Whether the schedule creates deployments. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.versionToLatest">versionToLatest</a></code> | <code>number</code> | Number of major Agent versions behind the latest version to target: `0`, `1`, or `2`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable name for the schedule. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#name FleetSchedule#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Datadog host query used to select the Agent upgrade targets. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#query FleetSchedule#query}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.rule"></a>

```typescript
public readonly rule: FleetScheduleRule;
```

- *Type:* <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a>

Weekly recurrence and maintenance-window configuration for the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#rule FleetSchedule#rule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Whether the schedule creates deployments.

Valid values are `active` and `inactive`. The API default is used when omitted. Valid values are `active`, `inactive`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#status FleetSchedule#status}

---

##### `versionToLatest`<sup>Optional</sup> <a name="versionToLatest" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.versionToLatest"></a>

```typescript
public readonly versionToLatest: number;
```

- *Type:* number

Number of major Agent versions behind the latest version to target: `0`, `1`, or `2`.

The API default is used when omitted. Value must be between 0 and 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#version_to_latest FleetSchedule#version_to_latest}

---

### FleetScheduleRule <a name="FleetScheduleRule" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.Initializer"></a>

```typescript
import { fleetSchedule } from '@cdktn/provider-datadog'

const fleetScheduleRule: fleetSchedule.FleetScheduleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Days when the schedule may run. Valid values are `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, and `Sun`. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>number</code> | Duration of the maintenance window in minutes. Value must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.startMaintenanceWindow">startMaintenanceWindow</a></code> | <code>string</code> | Start of the maintenance window in 24-hour `HH:MM` format. Must use HH:MM format. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.timezone">timezone</a></code> | <code>string</code> | IANA time zone used to interpret the maintenance window, for example `America/New_York` or `UTC`. |

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Days when the schedule may run. Valid values are `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, and `Sun`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#days_of_week FleetSchedule#days_of_week}

---

##### `maintenanceWindowDuration`<sup>Required</sup> <a name="maintenanceWindowDuration" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.maintenanceWindowDuration"></a>

```typescript
public readonly maintenanceWindowDuration: number;
```

- *Type:* number

Duration of the maintenance window in minutes. Value must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#maintenance_window_duration FleetSchedule#maintenance_window_duration}

---

##### `startMaintenanceWindow`<sup>Required</sup> <a name="startMaintenanceWindow" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.startMaintenanceWindow"></a>

```typescript
public readonly startMaintenanceWindow: string;
```

- *Type:* string

Start of the maintenance window in 24-hour `HH:MM` format. Must use HH:MM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#start_maintenance_window FleetSchedule#start_maintenance_window}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

IANA time zone used to interpret the maintenance window, for example `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#timezone FleetSchedule#timezone}

---

## Classes <a name="Classes" id="Classes"></a>

### FleetScheduleRuleOutputReference <a name="FleetScheduleRuleOutputReference" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer"></a>

```typescript
import { fleetSchedule } from '@cdktn/provider-datadog'

new fleetSchedule.FleetScheduleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.maintenanceWindowDurationInput">maintenanceWindowDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.startMaintenanceWindowInput">startMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.startMaintenanceWindow">startMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `maintenanceWindowDurationInput`<sup>Optional</sup> <a name="maintenanceWindowDurationInput" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.maintenanceWindowDurationInput"></a>

```typescript
public readonly maintenanceWindowDurationInput: number;
```

- *Type:* number

---

##### `startMaintenanceWindowInput`<sup>Optional</sup> <a name="startMaintenanceWindowInput" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.startMaintenanceWindowInput"></a>

```typescript
public readonly startMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `maintenanceWindowDuration`<sup>Required</sup> <a name="maintenanceWindowDuration" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.maintenanceWindowDuration"></a>

```typescript
public readonly maintenanceWindowDuration: number;
```

- *Type:* number

---

##### `startMaintenanceWindow`<sup>Required</sup> <a name="startMaintenanceWindow" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.startMaintenanceWindow"></a>

```typescript
public readonly startMaintenanceWindow: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetScheduleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a>

---



