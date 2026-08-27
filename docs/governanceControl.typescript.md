# `governanceControl` Submodule <a name="`governanceControl` Submodule" id="@cdktn/provider-datadog.governanceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GovernanceControl <a name="GovernanceControl" id="@cdktn/provider-datadog.governanceControl.GovernanceControl"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control datadog_governance_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

new governanceControl.GovernanceControl(scope: Construct, id: string, config: GovernanceControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig">GovernanceControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig">GovernanceControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetDetectionParameters">resetDetectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationParameters">resetMitigationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationType">resetMitigationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings"></a>

```typescript
public putNotificationSettings(value: IResolvable | GovernanceControlNotificationSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]

---

##### `resetDetectionParameters` <a name="resetDetectionParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetDetectionParameters"></a>

```typescript
public resetDetectionParameters(): void
```

##### `resetMitigationParameters` <a name="resetMitigationParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationParameters"></a>

```typescript
public resetMitigationParameters(): void
```

##### `resetMitigationType` <a name="resetMitigationType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationType"></a>

```typescript
public resetMitigationType(): void
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetNotificationSettings"></a>

```typescript
public resetNotificationSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GovernanceControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

governanceControl.GovernanceControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

governanceControl.GovernanceControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

governanceControl.GovernanceControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

governanceControl.GovernanceControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GovernanceControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GovernanceControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GovernanceControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GovernanceControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList">GovernanceControlNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParametersInput">detectionParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionTypeInput">detectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParametersInput">mitigationParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationTypeInput">mitigationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParameters">detectionParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionType">detectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParameters">mitigationParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationType">mitigationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: GovernanceControlNotificationSettingsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList">GovernanceControlNotificationSettingsList</a>

---

##### `detectionParametersInput`<sup>Optional</sup> <a name="detectionParametersInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParametersInput"></a>

```typescript
public readonly detectionParametersInput: string;
```

- *Type:* string

---

##### `detectionTypeInput`<sup>Optional</sup> <a name="detectionTypeInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionTypeInput"></a>

```typescript
public readonly detectionTypeInput: string;
```

- *Type:* string

---

##### `mitigationParametersInput`<sup>Optional</sup> <a name="mitigationParametersInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParametersInput"></a>

```typescript
public readonly mitigationParametersInput: string;
```

- *Type:* string

---

##### `mitigationTypeInput`<sup>Optional</sup> <a name="mitigationTypeInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationTypeInput"></a>

```typescript
public readonly mitigationTypeInput: string;
```

- *Type:* string

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettingsInput"></a>

```typescript
public readonly notificationSettingsInput: IResolvable | GovernanceControlNotificationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]

---

##### `detectionParameters`<sup>Required</sup> <a name="detectionParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParameters"></a>

```typescript
public readonly detectionParameters: string;
```

- *Type:* string

---

##### `detectionType`<sup>Required</sup> <a name="detectionType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionType"></a>

```typescript
public readonly detectionType: string;
```

- *Type:* string

---

##### `mitigationParameters`<sup>Required</sup> <a name="mitigationParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParameters"></a>

```typescript
public readonly mitigationParameters: string;
```

- *Type:* string

---

##### `mitigationType`<sup>Required</sup> <a name="mitigationType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationType"></a>

```typescript
public readonly mitigationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GovernanceControlConfig <a name="GovernanceControlConfig" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.Initializer"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

const governanceControlConfig: governanceControl.GovernanceControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionType">detectionType</a></code> | <code>string</code> | The detection type that uniquely identifies the control, for example `unused_api_keys`. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionParameters">detectionParameters</a></code> | <code>string</code> | Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationParameters">mitigationParameters</a></code> | <code>string</code> | Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationType">mitigationType</a></code> | <code>string</code> | The mitigation type configured for the control. Empty when not configured. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.notificationSettings">notificationSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]</code> | The notification settings for the control, one entry per event type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `detectionType`<sup>Required</sup> <a name="detectionType" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionType"></a>

```typescript
public readonly detectionType: string;
```

- *Type:* string

The detection type that uniquely identifies the control, for example `unused_api_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_type GovernanceControl#detection_type}

---

##### `detectionParameters`<sup>Optional</sup> <a name="detectionParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionParameters"></a>

```typescript
public readonly detectionParameters: string;
```

- *Type:* string

Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_parameters GovernanceControl#detection_parameters}

---

##### `mitigationParameters`<sup>Optional</sup> <a name="mitigationParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationParameters"></a>

```typescript
public readonly mitigationParameters: string;
```

- *Type:* string

Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_parameters GovernanceControl#mitigation_parameters}

---

##### `mitigationType`<sup>Optional</sup> <a name="mitigationType" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationType"></a>

```typescript
public readonly mitigationType: string;
```

- *Type:* string

The mitigation type configured for the control. Empty when not configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_type GovernanceControl#mitigation_type}

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: IResolvable | GovernanceControlNotificationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]

The notification settings for the control, one entry per event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#notification_settings GovernanceControl#notification_settings}

---

### GovernanceControlNotificationSettings <a name="GovernanceControlNotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.Initializer"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

const governanceControlNotificationSettings: governanceControl.GovernanceControlNotificationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether notifications are enabled for this event type. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.eventType">eventType</a></code> | <code>string</code> | The event type the notification settings apply to, such as `new_detection`. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.targets">targets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]</code> | The destinations that receive notifications for this event type. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether notifications are enabled for this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#enabled GovernanceControl#enabled}

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

The event type the notification settings apply to, such as `new_detection`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#event_type GovernanceControl#event_type}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.targets"></a>

```typescript
public readonly targets: IResolvable | GovernanceControlNotificationSettingsTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]

The destinations that receive notifications for this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#targets GovernanceControl#targets}

---

### GovernanceControlNotificationSettingsTargets <a name="GovernanceControlNotificationSettingsTargets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.Initializer"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

const governanceControlNotificationSettingsTargets: governanceControl.GovernanceControlNotificationSettingsTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.handle">handle</a></code> | <code>string</code> | The handle of the notification target. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.type">type</a></code> | <code>string</code> | The type of notification target: `email`, `slack`, `at_mention`, or `case`. |

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

The handle of the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#handle GovernanceControl#handle}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of notification target: `email`, `slack`, `at_mention`, or `case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#type GovernanceControl#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GovernanceControlNotificationSettingsList <a name="GovernanceControlNotificationSettingsList" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

new governanceControl.GovernanceControlNotificationSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get"></a>

```typescript
public get(index: number): GovernanceControlNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GovernanceControlNotificationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]

---


### GovernanceControlNotificationSettingsOutputReference <a name="GovernanceControlNotificationSettingsOutputReference" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

new governanceControl.GovernanceControlNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets">putTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets"></a>

```typescript
public putTargets(value: IResolvable | GovernanceControlNotificationSettingsTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList">GovernanceControlNotificationSettingsTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targets"></a>

```typescript
public readonly targets: GovernanceControlNotificationSettingsTargetsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList">GovernanceControlNotificationSettingsTargetsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | GovernanceControlNotificationSettingsTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GovernanceControlNotificationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>

---


### GovernanceControlNotificationSettingsTargetsList <a name="GovernanceControlNotificationSettingsTargetsList" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

new governanceControl.GovernanceControlNotificationSettingsTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get"></a>

```typescript
public get(index: number): GovernanceControlNotificationSettingsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GovernanceControlNotificationSettingsTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]

---


### GovernanceControlNotificationSettingsTargetsOutputReference <a name="GovernanceControlNotificationSettingsTargetsOutputReference" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer"></a>

```typescript
import { governanceControl } from '@cdktn/provider-datadog'

new governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handleInput">handleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handle">handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `handleInput`<sup>Optional</sup> <a name="handleInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handleInput"></a>

```typescript
public readonly handleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GovernanceControlNotificationSettingsTargets;
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>

---



