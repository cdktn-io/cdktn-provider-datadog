# `onCallUserNotificationChannel` Submodule <a name="`onCallUserNotificationChannel` Submodule" id="@cdktn/provider-datadog.onCallUserNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallUserNotificationChannel <a name="OnCallUserNotificationChannel" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/on_call_user_notification_channel datadog_on_call_user_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

new onCallUserNotificationChannel.OnCallUserNotificationChannel(scope: Construct, id: string, config: OnCallUserNotificationChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig">OnCallUserNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig">OnCallUserNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone">putPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetPhone">resetPhone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmail` <a name="putEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail"></a>

```typescript
public putEmail(value: OnCallUserNotificationChannelEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---

##### `putPhone` <a name="putPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone"></a>

```typescript
public putPhone(value: OnCallUserNotificationChannelPhone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetPhone` <a name="resetPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetPhone"></a>

```typescript
public resetPhone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnCallUserNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnCallUserNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/on_call_user_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OnCallUserNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference">OnCallUserNotificationChannelEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference">OnCallUserNotificationChannelPhoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.emailInput">emailInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phoneInput">phoneInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.email"></a>

```typescript
public readonly email: OnCallUserNotificationChannelEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference">OnCallUserNotificationChannelEmailOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phone"></a>

```typescript
public readonly phone: OnCallUserNotificationChannelPhoneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference">OnCallUserNotificationChannelPhoneOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.emailInput"></a>

```typescript
public readonly emailInput: IResolvable | OnCallUserNotificationChannelEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phoneInput"></a>

```typescript
public readonly phoneInput: IResolvable | OnCallUserNotificationChannelPhone;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallUserNotificationChannelConfig <a name="OnCallUserNotificationChannelConfig" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.Initializer"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

const onCallUserNotificationChannelConfig: onCallUserNotificationChannel.OnCallUserNotificationChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.userId">userId</a></code> | <code>string</code> | ID of the user to associate the notification channel with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | phone block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

ID of the user to associate the notification channel with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/on_call_user_notification_channel#user_id OnCallUserNotificationChannel#user_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.email"></a>

```typescript
public readonly email: OnCallUserNotificationChannelEmail;
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/on_call_user_notification_channel#email OnCallUserNotificationChannel#email}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.phone"></a>

```typescript
public readonly phone: OnCallUserNotificationChannelPhone;
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/on_call_user_notification_channel#phone OnCallUserNotificationChannel#phone}

---

### OnCallUserNotificationChannelEmail <a name="OnCallUserNotificationChannelEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.Initializer"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

const onCallUserNotificationChannelEmail: onCallUserNotificationChannel.OnCallUserNotificationChannelEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.address">address</a></code> | <code>string</code> | The e-mail address to be notified. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.formats">formats</a></code> | <code>string[]</code> | Preferred content formats for notifications. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The e-mail address to be notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/on_call_user_notification_channel#address OnCallUserNotificationChannel#address}

---

##### `formats`<sup>Optional</sup> <a name="formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

Preferred content formats for notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/on_call_user_notification_channel#formats OnCallUserNotificationChannel#formats}

---

### OnCallUserNotificationChannelPhone <a name="OnCallUserNotificationChannelPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.Initializer"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

const onCallUserNotificationChannelPhone: onCallUserNotificationChannel.OnCallUserNotificationChannelPhone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.property.number">number</a></code> | <code>string</code> | The E-164 formatted phone number (for example, +3371234567). |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

The E-164 formatted phone number (for example, +3371234567).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/on_call_user_notification_channel#number OnCallUserNotificationChannel#number}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallUserNotificationChannelEmailOutputReference <a name="OnCallUserNotificationChannelEmailOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

new onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetFormats">resetFormats</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetFormats` <a name="resetFormats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetFormats"></a>

```typescript
public resetFormats(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formatsInput">formatsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formats">formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `formatsInput`<sup>Optional</sup> <a name="formatsInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formatsInput"></a>

```typescript
public readonly formatsInput: string[];
```

- *Type:* string[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallUserNotificationChannelEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---


### OnCallUserNotificationChannelPhoneOutputReference <a name="OnCallUserNotificationChannelPhoneOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer"></a>

```typescript
import { onCallUserNotificationChannel } from '@cdktn/provider-datadog'

new onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resetNumber">resetNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumber` <a name="resetNumber" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resetNumber"></a>

```typescript
public resetNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.numberInput">numberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.number">number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.numberInput"></a>

```typescript
public readonly numberInput: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallUserNotificationChannelPhone;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---



