# `serviceLevelObjective` Submodule <a name="`serviceLevelObjective` Submodule" id="@cdktn/provider-datadog.serviceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjective(scope: Construct, id: string, config: ServiceLevelObjectiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig">ServiceLevelObjectiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig">ServiceLevelObjectiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification">putSliSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds">putThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetIgnoreTagKeys">resetIgnoreTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds">resetMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetSliSpecification">resetSliSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold">resetTargetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe">resetTimeframe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold">resetWarningThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuery` <a name="putQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery"></a>

```typescript
public putQuery(value: ServiceLevelObjectiveQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `putSliSpecification` <a name="putSliSpecification" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification"></a>

```typescript
public putSliSpecification(value: ServiceLevelObjectiveSliSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

---

##### `putThresholds` <a name="putThresholds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds"></a>

```typescript
public putThresholds(value: IResolvable | ServiceLevelObjectiveThresholds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreTagKeys` <a name="resetIgnoreTagKeys" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetIgnoreTagKeys"></a>

```typescript
public resetIgnoreTagKeys(): void
```

##### `resetMonitorIds` <a name="resetMonitorIds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds"></a>

```typescript
public resetMonitorIds(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetSliSpecification` <a name="resetSliSpecification" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetSliSpecification"></a>

```typescript
public resetSliSpecification(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetThreshold` <a name="resetTargetThreshold" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold"></a>

```typescript
public resetTargetThreshold(): void
```

##### `resetTimeframe` <a name="resetTimeframe" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe"></a>

```typescript
public resetTimeframe(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate"></a>

```typescript
public resetValidate(): void
```

##### `resetWarningThreshold` <a name="resetWarningThreshold" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold"></a>

```typescript
public resetWarningThreshold(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServiceLevelObjective resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

serviceLevelObjective.ServiceLevelObjective.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

serviceLevelObjective.ServiceLevelObjective.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

serviceLevelObjective.ServiceLevelObjective.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

serviceLevelObjective.ServiceLevelObjective.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServiceLevelObjective resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceLevelObjective to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceLevelObjective that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServiceLevelObjective to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query">query</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecification">sliSpecification</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference">ServiceLevelObjectiveSliSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds">thresholds</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.ignoreTagKeysInput">ignoreTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput">monitorIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput">queryInput</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecificationInput">sliSpecificationInput</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput">targetThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput">thresholdsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput">timeframeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput">validateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput">warningThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.ignoreTagKeys">ignoreTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds">monitorIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold">targetThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe">timeframe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate">validate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a>

---

##### `sliSpecification`<sup>Required</sup> <a name="sliSpecification" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecification"></a>

```typescript
public readonly sliSpecification: ServiceLevelObjectiveSliSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference">ServiceLevelObjectiveSliSpecificationOutputReference</a>

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds"></a>

```typescript
public readonly thresholds: ServiceLevelObjectiveThresholdsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreTagKeysInput`<sup>Optional</sup> <a name="ignoreTagKeysInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.ignoreTagKeysInput"></a>

```typescript
public readonly ignoreTagKeysInput: string[];
```

- *Type:* string[]

---

##### `monitorIdsInput`<sup>Optional</sup> <a name="monitorIdsInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput"></a>

```typescript
public readonly monitorIdsInput: number[];
```

- *Type:* number[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput"></a>

```typescript
public readonly queryInput: ServiceLevelObjectiveQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `sliSpecificationInput`<sup>Optional</sup> <a name="sliSpecificationInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecificationInput"></a>

```typescript
public readonly sliSpecificationInput: ServiceLevelObjectiveSliSpecification;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `targetThresholdInput`<sup>Optional</sup> <a name="targetThresholdInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput"></a>

```typescript
public readonly targetThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsInput`<sup>Optional</sup> <a name="thresholdsInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput"></a>

```typescript
public readonly thresholdsInput: IResolvable | ServiceLevelObjectiveThresholds[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

---

##### `timeframeInput`<sup>Optional</sup> <a name="timeframeInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput"></a>

```typescript
public readonly timeframeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput"></a>

```typescript
public readonly validateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `warningThresholdInput`<sup>Optional</sup> <a name="warningThresholdInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput"></a>

```typescript
public readonly warningThresholdInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreTagKeys`<sup>Required</sup> <a name="ignoreTagKeys" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.ignoreTagKeys"></a>

```typescript
public readonly ignoreTagKeys: string[];
```

- *Type:* string[]

---

##### `monitorIds`<sup>Required</sup> <a name="monitorIds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds"></a>

```typescript
public readonly monitorIds: number[];
```

- *Type:* number[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `targetThreshold`<sup>Required</sup> <a name="targetThreshold" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold"></a>

```typescript
public readonly targetThreshold: number;
```

- *Type:* number

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `warningThreshold`<sup>Required</sup> <a name="warningThreshold" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelObjectiveConfig <a name="ServiceLevelObjectiveConfig" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveConfig: serviceLevelObjective.ServiceLevelObjectiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name">name</a></code> | <code>string</code> | Name of Datadog service level objective. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds">thresholds</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]</code> | thresholds block. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type">type</a></code> | <code>string</code> | The type of the service level objective. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description">description</a></code> | <code>string</code> | A description of this service level objective. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards). |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups">groups</a></code> | <code>string[]</code> | A static set of groups to filter monitor-based SLOs. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.ignoreTagKeys">ignoreTagKeys</a></code> | <code>string[]</code> | Tag keys whose drift Terraform should ignore. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds">monitorIds</a></code> | <code>number[]</code> | A static set of monitor IDs to use as part of the SLO. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query">query</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.sliSpecification">sliSpecification</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | sli_specification block. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tags to associate with your service level objective. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold">targetThreshold</a></code> | <code>number</code> | The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe">timeframe</a></code> | <code>string</code> | The primary time frame for the objective. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate">validate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to validate the SLO. It checks if monitors added to a monitor SLO already exist. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | The objective's warning value in `(0,100)`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Datadog service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds"></a>

```typescript
public readonly thresholds: IResolvable | ServiceLevelObjectiveThresholds[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the service level objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`, `time_slice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#type ServiceLevelObjective#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#description ServiceLevelObjective#description}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

A static set of groups to filter monitor-based SLOs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreTagKeys`<sup>Optional</sup> <a name="ignoreTagKeys" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.ignoreTagKeys"></a>

```typescript
public readonly ignoreTagKeys: string[];
```

- *Type:* string[]

Tag keys whose drift Terraform should ignore.

Use this to keep specific tags managed outside Terraform (for example, by the Datadog UI or a tagging service) without `terraform plan` reporting drift on every run. Other tags are still managed normally. Any `:value` suffix is ignored. Merged with the provider's `ignore_tag_keys` for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#ignore_tag_keys ServiceLevelObjective#ignore_tag_keys}

---

##### `monitorIds`<sup>Optional</sup> <a name="monitorIds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds"></a>

```typescript
public readonly monitorIds: number[];
```

- *Type:* number[]

A static set of monitor IDs to use as part of the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `sliSpecification`<sup>Optional</sup> <a name="sliSpecification" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.sliSpecification"></a>

```typescript
public readonly sliSpecification: ServiceLevelObjectiveSliSpecification;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

sli_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#sli_specification ServiceLevelObjective#sli_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags to associate with your service level objective.

This can help you categorize and filter service level objectives in the service level objectives page of the UI. **Note**: it's not currently possible to filter by these tags when querying via the API. If default tags are present at the provider level, they will be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}

---

##### `targetThreshold`<sup>Optional</sup> <a name="targetThreshold" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold"></a>

```typescript
public readonly targetThreshold: number;
```

- *Type:* number

The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}

---

##### `timeframe`<sup>Optional</sup> <a name="timeframe" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

The primary time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to validate the SLO. It checks if monitors added to a monitor SLO already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}

---

##### `warningThreshold`<sup>Optional</sup> <a name="warningThreshold" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

The objective's warning value in `(0,100)`.

This must be greater than the target value and match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}

---

### ServiceLevelObjectiveQuery <a name="ServiceLevelObjectiveQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveQuery: serviceLevelObjective.ServiceLevelObjectiveQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator">denominator</a></code> | <code>string</code> | The sum of the `total` events. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator">numerator</a></code> | <code>string</code> | The sum of all the `good` events. |

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator"></a>

```typescript
public readonly denominator: string;
```

- *Type:* string

The sum of the `total` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#denominator ServiceLevelObjective#denominator}

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator"></a>

```typescript
public readonly numerator: string;
```

- *Type:* string

The sum of all the `good` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#numerator ServiceLevelObjective#numerator}

---

### ServiceLevelObjectiveSliSpecification <a name="ServiceLevelObjectiveSliSpecification" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecification: serviceLevelObjective.ServiceLevelObjectiveSliSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.property.count">count</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount">ServiceLevelObjectiveSliSpecificationCount</a></code> | count block. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.property.timeSlice">timeSlice</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | time_slice block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.property.count"></a>

```typescript
public readonly count: ServiceLevelObjectiveSliSpecificationCount;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount">ServiceLevelObjectiveSliSpecificationCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#count ServiceLevelObjective#count}

---

##### `timeSlice`<sup>Optional</sup> <a name="timeSlice" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.property.timeSlice"></a>

```typescript
public readonly timeSlice: ServiceLevelObjectiveSliSpecificationTimeSlice;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

time_slice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#time_slice ServiceLevelObjective#time_slice}

---

### ServiceLevelObjectiveSliSpecificationCount <a name="ServiceLevelObjectiveSliSpecificationCount" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecificationCount: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.property.goodEventsFormula">goodEventsFormula</a></code> | <code>string</code> | The formula that specifies how to compute the good events. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.property.queries">queries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a>[]</code> | queries block. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.property.badEventsFormula">badEventsFormula</a></code> | <code>string</code> | The formula that specifies how to compute the bad events. Mutually exclusive with `total_events_formula`. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.property.totalEventsFormula">totalEventsFormula</a></code> | <code>string</code> | The formula that specifies how to compute the total events. Mutually exclusive with `bad_events_formula`. |

---

##### `goodEventsFormula`<sup>Required</sup> <a name="goodEventsFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.property.goodEventsFormula"></a>

```typescript
public readonly goodEventsFormula: string;
```

- *Type:* string

The formula that specifies how to compute the good events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#good_events_formula ServiceLevelObjective#good_events_formula}

---

##### `queries`<sup>Required</sup> <a name="queries" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.property.queries"></a>

```typescript
public readonly queries: IResolvable | ServiceLevelObjectiveSliSpecificationCountQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a>[]

queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#queries ServiceLevelObjective#queries}

---

##### `badEventsFormula`<sup>Optional</sup> <a name="badEventsFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.property.badEventsFormula"></a>

```typescript
public readonly badEventsFormula: string;
```

- *Type:* string

The formula that specifies how to compute the bad events. Mutually exclusive with `total_events_formula`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#bad_events_formula ServiceLevelObjective#bad_events_formula}

---

##### `totalEventsFormula`<sup>Optional</sup> <a name="totalEventsFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount.property.totalEventsFormula"></a>

```typescript
public readonly totalEventsFormula: string;
```

- *Type:* string

The formula that specifies how to compute the total events. Mutually exclusive with `bad_events_formula`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#total_events_formula ServiceLevelObjective#total_events_formula}

---

### ServiceLevelObjectiveSliSpecificationCountQueries <a name="ServiceLevelObjectiveSliSpecificationCountQueries" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecificationCountQueries: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries.property.metricQuery">metricQuery</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery</a></code> | metric_query block. |

---

##### `metricQuery`<sup>Optional</sup> <a name="metricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries.property.metricQuery"></a>

```typescript
public readonly metricQuery: ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery</a>

metric_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#metric_query ServiceLevelObjective#metric_query}

---

### ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery <a name="ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecificationCountQueriesMetricQuery: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery.property.name">name</a></code> | <code>string</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery.property.query">query</a></code> | <code>string</code> | The metrics query definition. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery.property.dataSource">dataSource</a></code> | <code>string</code> | The data source for metrics queries. Defaults to `"metrics"`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The metrics query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

The data source for metrics queries. Defaults to `"metrics"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#data_source ServiceLevelObjective#data_source}

---

### ServiceLevelObjectiveSliSpecificationTimeSlice <a name="ServiceLevelObjectiveSliSpecificationTimeSlice" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSlice: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.comparator">comparator</a></code> | <code>string</code> | The comparator used to compare the SLI value to the threshold. Valid values are `>`, `>=`, `<`, `<=`. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.query">query</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.threshold">threshold</a></code> | <code>number</code> | The threshold value to which each SLI value will be compared. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.queryIntervalSeconds">queryIntervalSeconds</a></code> | <code>number</code> | The interval used when querying data, which defines the size of a time slice. |

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

The comparator used to compare the SLI value to the threshold. Valid values are `>`, `>=`, `<`, `<=`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#comparator ServiceLevelObjective#comparator}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveSliSpecificationTimeSliceQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The threshold value to which each SLI value will be compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#threshold ServiceLevelObjective#threshold}

---

##### `queryIntervalSeconds`<sup>Optional</sup> <a name="queryIntervalSeconds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.queryIntervalSeconds"></a>

```typescript
public readonly queryIntervalSeconds: number;
```

- *Type:* number

The interval used when querying data, which defines the size of a time slice.

Valid values are `60`, `300`. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#query_interval_seconds ServiceLevelObjective#query_interval_seconds}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSliceQuery: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.formula">formula</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | formula block. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.query">query</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]</code> | query block. |

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.formula"></a>

```typescript
public readonly formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

formula block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#formula ServiceLevelObjective#formula}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.query"></a>

```typescript
public readonly query: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSliceQueryFormula: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.property.formulaExpression">formulaExpression</a></code> | <code>string</code> | The formula string, which is an expression involving named queries. |

---

##### `formulaExpression`<sup>Required</sup> <a name="formulaExpression" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.property.formulaExpression"></a>

```typescript
public readonly formulaExpression: string;
```

- *Type:* string

The formula string, which is an expression involving named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#formula_expression ServiceLevelObjective#formula_expression}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSliceQueryQuery: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.property.metricQuery">metricQuery</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | metric_query block. |

---

##### `metricQuery`<sup>Optional</sup> <a name="metricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.property.metricQuery"></a>

```typescript
public readonly metricQuery: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

metric_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#metric_query ServiceLevelObjective#metric_query}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.name">name</a></code> | <code>string</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.query">query</a></code> | <code>string</code> | The metrics query definition. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.dataSource">dataSource</a></code> | <code>string</code> | The data source for metrics queries. Defaults to `"metrics"`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The metrics query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

The data source for metrics queries. Defaults to `"metrics"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#data_source ServiceLevelObjective#data_source}

---

### ServiceLevelObjectiveThresholds <a name="ServiceLevelObjectiveThresholds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

const serviceLevelObjectiveThresholds: serviceLevelObjective.ServiceLevelObjectiveThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target">target</a></code> | <code>number</code> | The objective's target in `(0,100)`. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe">timeframe</a></code> | <code>string</code> | The time frame for the objective. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning">warning</a></code> | <code>number</code> | The objective's warning value in `(0,100)`. This must be greater than the target value. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

The objective's target in `(0,100)`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#target ServiceLevelObjective#target}

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

The time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning"></a>

```typescript
public readonly warning: number;
```

- *Type:* number

The objective's warning value in `(0,100)`. This must be greater than the target value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/service_level_objective#warning ServiceLevelObjective#warning}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelObjectiveQueryOutputReference <a name="ServiceLevelObjectiveQueryOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput">denominatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput">numeratorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator">denominator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator">numerator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `denominatorInput`<sup>Optional</sup> <a name="denominatorInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput"></a>

```typescript
public readonly denominatorInput: string;
```

- *Type:* string

---

##### `numeratorInput`<sup>Optional</sup> <a name="numeratorInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput"></a>

```typescript
public readonly numeratorInput: string;
```

- *Type:* string

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator"></a>

```typescript
public readonly denominator: string;
```

- *Type:* string

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator"></a>

```typescript
public readonly numerator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---


### ServiceLevelObjectiveSliSpecificationCountOutputReference <a name="ServiceLevelObjectiveSliSpecificationCountOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.putQueries">putQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.resetBadEventsFormula">resetBadEventsFormula</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.resetTotalEventsFormula">resetTotalEventsFormula</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueries` <a name="putQueries" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.putQueries"></a>

```typescript
public putQueries(value: IResolvable | ServiceLevelObjectiveSliSpecificationCountQueries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.putQueries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a>[]

---

##### `resetBadEventsFormula` <a name="resetBadEventsFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.resetBadEventsFormula"></a>

```typescript
public resetBadEventsFormula(): void
```

##### `resetTotalEventsFormula` <a name="resetTotalEventsFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.resetTotalEventsFormula"></a>

```typescript
public resetTotalEventsFormula(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.queries">queries</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList">ServiceLevelObjectiveSliSpecificationCountQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.badEventsFormulaInput">badEventsFormulaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.goodEventsFormulaInput">goodEventsFormulaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.queriesInput">queriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.totalEventsFormulaInput">totalEventsFormulaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.badEventsFormula">badEventsFormula</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.goodEventsFormula">goodEventsFormula</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.totalEventsFormula">totalEventsFormula</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount">ServiceLevelObjectiveSliSpecificationCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queries`<sup>Required</sup> <a name="queries" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.queries"></a>

```typescript
public readonly queries: ServiceLevelObjectiveSliSpecificationCountQueriesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList">ServiceLevelObjectiveSliSpecificationCountQueriesList</a>

---

##### `badEventsFormulaInput`<sup>Optional</sup> <a name="badEventsFormulaInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.badEventsFormulaInput"></a>

```typescript
public readonly badEventsFormulaInput: string;
```

- *Type:* string

---

##### `goodEventsFormulaInput`<sup>Optional</sup> <a name="goodEventsFormulaInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.goodEventsFormulaInput"></a>

```typescript
public readonly goodEventsFormulaInput: string;
```

- *Type:* string

---

##### `queriesInput`<sup>Optional</sup> <a name="queriesInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.queriesInput"></a>

```typescript
public readonly queriesInput: IResolvable | ServiceLevelObjectiveSliSpecificationCountQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a>[]

---

##### `totalEventsFormulaInput`<sup>Optional</sup> <a name="totalEventsFormulaInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.totalEventsFormulaInput"></a>

```typescript
public readonly totalEventsFormulaInput: string;
```

- *Type:* string

---

##### `badEventsFormula`<sup>Required</sup> <a name="badEventsFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.badEventsFormula"></a>

```typescript
public readonly badEventsFormula: string;
```

- *Type:* string

---

##### `goodEventsFormula`<sup>Required</sup> <a name="goodEventsFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.goodEventsFormula"></a>

```typescript
public readonly goodEventsFormula: string;
```

- *Type:* string

---

##### `totalEventsFormula`<sup>Required</sup> <a name="totalEventsFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.totalEventsFormula"></a>

```typescript
public readonly totalEventsFormula: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationCount;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount">ServiceLevelObjectiveSliSpecificationCount</a>

---


### ServiceLevelObjectiveSliSpecificationCountQueriesList <a name="ServiceLevelObjectiveSliSpecificationCountQueriesList" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.get"></a>

```typescript
public get(index: number): ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveSliSpecificationCountQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a>[]

---


### ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery</a>

---


### ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference <a name="ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.putMetricQuery">putMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.resetMetricQuery">resetMetricQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricQuery` <a name="putMetricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.putMetricQuery"></a>

```typescript
public putMetricQuery(value: ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.putMetricQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery</a>

---

##### `resetMetricQuery` <a name="resetMetricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.resetMetricQuery"></a>

```typescript
public resetMetricQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.metricQuery">metricQuery</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.metricQueryInput">metricQueryInput</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.metricQuery"></a>

```typescript
public readonly metricQuery: ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQueryOutputReference</a>

---

##### `metricQueryInput`<sup>Optional</sup> <a name="metricQueryInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.metricQueryInput"></a>

```typescript
public readonly metricQueryInput: ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery">ServiceLevelObjectiveSliSpecificationCountQueriesMetricQuery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveSliSpecificationCountQueries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountQueries">ServiceLevelObjectiveSliSpecificationCountQueries</a>

---


### ServiceLevelObjectiveSliSpecificationOutputReference <a name="ServiceLevelObjectiveSliSpecificationOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putCount">putCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice">putTimeSlice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resetTimeSlice">resetTimeSlice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCount` <a name="putCount" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putCount"></a>

```typescript
public putCount(value: ServiceLevelObjectiveSliSpecificationCount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount">ServiceLevelObjectiveSliSpecificationCount</a>

---

##### `putTimeSlice` <a name="putTimeSlice" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice"></a>

```typescript
public putTimeSlice(value: ServiceLevelObjectiveSliSpecificationTimeSlice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

---

##### `resetCount` <a name="resetCount" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetTimeSlice` <a name="resetTimeSlice" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resetTimeSlice"></a>

```typescript
public resetTimeSlice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.count">count</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference">ServiceLevelObjectiveSliSpecificationCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSlice">timeSlice</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.countInput">countInput</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount">ServiceLevelObjectiveSliSpecificationCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSliceInput">timeSliceInput</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.count"></a>

```typescript
public readonly count: ServiceLevelObjectiveSliSpecificationCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCountOutputReference">ServiceLevelObjectiveSliSpecificationCountOutputReference</a>

---

##### `timeSlice`<sup>Required</sup> <a name="timeSlice" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSlice"></a>

```typescript
public readonly timeSlice: ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.countInput"></a>

```typescript
public readonly countInput: ServiceLevelObjectiveSliSpecificationCount;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationCount">ServiceLevelObjectiveSliSpecificationCount</a>

---

##### `timeSliceInput`<sup>Optional</sup> <a name="timeSliceInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSliceInput"></a>

```typescript
public readonly timeSliceInput: ServiceLevelObjectiveSliSpecificationTimeSlice;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecification;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resetQueryIntervalSeconds">resetQueryIntervalSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuery` <a name="putQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery"></a>

```typescript
public putQuery(value: ServiceLevelObjectiveSliSpecificationTimeSliceQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

---

##### `resetQueryIntervalSeconds` <a name="resetQueryIntervalSeconds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resetQueryIntervalSeconds"></a>

```typescript
public resetQueryIntervalSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryIntervalSecondsInput">queryIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryIntervalSeconds">queryIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference</a>

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: ServiceLevelObjectiveSliSpecificationTimeSliceQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

---

##### `queryIntervalSecondsInput`<sup>Optional</sup> <a name="queryIntervalSecondsInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryIntervalSecondsInput"></a>

```typescript
public readonly queryIntervalSecondsInput: number;
```

- *Type:* number

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `queryIntervalSeconds`<sup>Required</sup> <a name="queryIntervalSeconds" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryIntervalSeconds"></a>

```typescript
public readonly queryIntervalSeconds: number;
```

- *Type:* number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationTimeSlice;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpressionInput">formulaExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpression">formulaExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formulaExpressionInput`<sup>Optional</sup> <a name="formulaExpressionInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpressionInput"></a>

```typescript
public readonly formulaExpressionInput: string;
```

- *Type:* string

---

##### `formulaExpression`<sup>Required</sup> <a name="formulaExpression" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpression"></a>

```typescript
public readonly formulaExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula">putFormula</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery">putQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFormula` <a name="putFormula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula"></a>

```typescript
public putFormula(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

---

##### `putQuery` <a name="putQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery"></a>

```typescript
public putQuery(value: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formula">formula</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formulaInput">formulaInput</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.queryInput">queryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formula"></a>

```typescript
public readonly formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList</a>

---

##### `formulaInput`<sup>Optional</sup> <a name="formulaInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formulaInput"></a>

```typescript
public readonly formulaInput: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationTimeSliceQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get"></a>

```typescript
public get(index: number): ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery">putMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resetMetricQuery">resetMetricQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricQuery` <a name="putMetricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery"></a>

```typescript
public putMetricQuery(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

---

##### `resetMetricQuery` <a name="resetMetricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resetMetricQuery"></a>

```typescript
public resetMetricQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQuery">metricQuery</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQueryInput">metricQueryInput</a></code> | <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQuery"></a>

```typescript
public readonly metricQuery: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference</a>

---

##### `metricQueryInput`<sup>Optional</sup> <a name="metricQueryInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQueryInput"></a>

```typescript
public readonly metricQueryInput: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery;
```

- *Type:* <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>

---


### ServiceLevelObjectiveThresholdsList <a name="ServiceLevelObjectiveThresholdsList" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get"></a>

```typescript
public get(index: number): ServiceLevelObjectiveThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveThresholds[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

---


### ServiceLevelObjectiveThresholdsOutputReference <a name="ServiceLevelObjectiveThresholdsOutputReference" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktn/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning">resetWarning</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWarning` <a name="resetWarning" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning"></a>

```typescript
public resetWarning(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay">targetDisplay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay">warningDisplay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput">targetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput">timeframeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput">warningInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe">timeframe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning">warning</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetDisplay`<sup>Required</sup> <a name="targetDisplay" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay"></a>

```typescript
public readonly targetDisplay: string;
```

- *Type:* string

---

##### `warningDisplay`<sup>Required</sup> <a name="warningDisplay" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay"></a>

```typescript
public readonly warningDisplay: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: number;
```

- *Type:* number

---

##### `timeframeInput`<sup>Optional</sup> <a name="timeframeInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput"></a>

```typescript
public readonly timeframeInput: string;
```

- *Type:* string

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput"></a>

```typescript
public readonly warningInput: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning"></a>

```typescript
public readonly warning: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveThresholds;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>

---



