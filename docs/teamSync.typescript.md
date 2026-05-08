# `teamSync` Submodule <a name="`teamSync` Submodule" id="@cdktn/provider-datadog.teamSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSync <a name="TeamSync" id="@cdktn/provider-datadog.teamSync.TeamSync"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync datadog_team_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

new teamSync.TeamSync(scope: Construct, id: string, config: TeamSyncConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig">TeamSyncConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig">TeamSyncConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState">putSelectionState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetSelectionState">resetSelectionState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetSyncMembership">resetSyncMembership</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamSync.TeamSync.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.teamSync.TeamSync.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.teamSync.TeamSync.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.teamSync.TeamSync.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.teamSync.TeamSync.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.teamSync.TeamSync.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.teamSync.TeamSync.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.teamSync.TeamSync.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.teamSync.TeamSync.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.teamSync.TeamSync.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSelectionState` <a name="putSelectionState" id="@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState"></a>

```typescript
public putSelectionState(value: IResolvable | TeamSyncSelectionState[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>[]

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-datadog.teamSync.TeamSync.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetSelectionState` <a name="resetSelectionState" id="@cdktn/provider-datadog.teamSync.TeamSync.resetSelectionState"></a>

```typescript
public resetSelectionState(): void
```

##### `resetSyncMembership` <a name="resetSyncMembership" id="@cdktn/provider-datadog.teamSync.TeamSync.resetSyncMembership"></a>

```typescript
public resetSyncMembership(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TeamSync resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.teamSync.TeamSync.isConstruct"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

teamSync.TeamSync.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

teamSync.TeamSync.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

teamSync.TeamSync.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

teamSync.TeamSync.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TeamSync resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamSync to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TeamSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.selectionState">selectionState</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList">TeamSyncSelectionStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.selectionStateInput">selectionStateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembershipInput">syncMembershipInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembership">syncMembership</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.teamSync.TeamSync.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.teamSync.TeamSync.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSync.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.teamSync.TeamSync.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamSync.TeamSync.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamSync.TeamSync.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.teamSync.TeamSync.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.teamSync.TeamSync.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamSync.TeamSync.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamSync.TeamSync.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `selectionState`<sup>Required</sup> <a name="selectionState" id="@cdktn/provider-datadog.teamSync.TeamSync.property.selectionState"></a>

```typescript
public readonly selectionState: TeamSyncSelectionStateList;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList">TeamSyncSelectionStateList</a>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `selectionStateInput`<sup>Optional</sup> <a name="selectionStateInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.selectionStateInput"></a>

```typescript
public readonly selectionStateInput: IResolvable | TeamSyncSelectionState[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `syncMembershipInput`<sup>Optional</sup> <a name="syncMembershipInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembershipInput"></a>

```typescript
public readonly syncMembershipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-datadog.teamSync.TeamSync.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.teamSync.TeamSync.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `syncMembership`<sup>Required</sup> <a name="syncMembership" id="@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembership"></a>

```typescript
public readonly syncMembership: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSync.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.teamSync.TeamSync.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSyncConfig <a name="TeamSyncConfig" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.Initializer"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

const teamSyncConfig: teamSync.TeamSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.source">source</a></code> | <code>string</code> | The external source platform for team synchronization. Valid values are `github`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.type">type</a></code> | <code>string</code> | The type of synchronization operation. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.frequency">frequency</a></code> | <code>string</code> | How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.selectionState">selectionState</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>[]</code> | selection_state block. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.syncMembership">syncMembership</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to sync members from the external team to the Datadog team. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The external source platform for team synchronization. Valid values are `github`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#source TeamSync#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of synchronization operation.

`link` connects teams by matching names. `provision` creates new teams when no match is found. Valid values are `link`, `provision`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#type TeamSync#type}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#frequency TeamSync#frequency}

---

##### `selectionState`<sup>Optional</sup> <a name="selectionState" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.selectionState"></a>

```typescript
public readonly selectionState: IResolvable | TeamSyncSelectionState[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>[]

selection_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#selection_state TeamSync#selection_state}

---

##### `syncMembership`<sup>Optional</sup> <a name="syncMembership" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.syncMembership"></a>

```typescript
public readonly syncMembership: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to sync members from the external team to the Datadog team. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#sync_membership TeamSync#sync_membership}

---

### TeamSyncSelectionState <a name="TeamSyncSelectionState" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.Initializer"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

const teamSyncSelectionState: teamSync.TeamSyncSelectionState = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.externalId">externalId</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | external_id block. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.operation">operation</a></code> | <code>string</code> | The operation to perform on the selected hierarchy. Valid values are `include`. Defaults to `"include"`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.scope">scope</a></code> | <code>string</code> | The scope of the selection. Valid values are `subtree`. Defaults to `"subtree"`. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.externalId"></a>

```typescript
public readonly externalId: TeamSyncSelectionStateExternalId;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#external_id TeamSync#external_id}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

The operation to perform on the selected hierarchy. Valid values are `include`. Defaults to `"include"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#operation TeamSync#operation}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the selection. Valid values are `subtree`. Defaults to `"subtree"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#scope TeamSync#scope}

---

### TeamSyncSelectionStateExternalId <a name="TeamSyncSelectionStateExternalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.Initializer"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

const teamSyncSelectionStateExternalId: teamSync.TeamSyncSelectionStateExternalId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.type">type</a></code> | <code>string</code> | The type of external identifier. Valid values are `team`, `organization`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.value">value</a></code> | <code>string</code> | The external identifier value from the source platform (e.g. a GitHub organization ID or team ID). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of external identifier. Valid values are `team`, `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#type TeamSync#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The external identifier value from the source platform (e.g. a GitHub organization ID or team ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/team_sync#value TeamSync#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSyncSelectionStateExternalIdOutputReference <a name="TeamSyncSelectionStateExternalIdOutputReference" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

new teamSync.TeamSyncSelectionStateExternalIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamSyncSelectionStateExternalId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

---


### TeamSyncSelectionStateList <a name="TeamSyncSelectionStateList" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

new teamSync.TeamSyncSelectionStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get"></a>

```typescript
public get(index: number): TeamSyncSelectionStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamSyncSelectionState[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>[]

---


### TeamSyncSelectionStateOutputReference <a name="TeamSyncSelectionStateOutputReference" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer"></a>

```typescript
import { teamSync } from '@cdktn/provider-datadog'

new teamSync.TeamSyncSelectionStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId">putExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalId` <a name="putExternalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId"></a>

```typescript
public putExternalId(value: TeamSyncSelectionStateExternalId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

---

##### `resetOperation` <a name="resetOperation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalId">externalId</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference">TeamSyncSelectionStateExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalId"></a>

```typescript
public readonly externalId: TeamSyncSelectionStateExternalIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference">TeamSyncSelectionStateExternalIdOutputReference</a>

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: IResolvable | TeamSyncSelectionStateExternalId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamSyncSelectionState;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>

---



