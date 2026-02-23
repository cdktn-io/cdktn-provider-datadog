# `onCallUserNotificationRule` Submodule <a name="`onCallUserNotificationRule` Submodule" id="@cdktn/provider-datadog.onCallUserNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallUserNotificationRule <a name="OnCallUserNotificationRule" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/on_call_user_notification_rule datadog_on_call_user_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer"></a>

```typescript
import { onCallUserNotificationRule } from '@cdktn/provider-datadog'

new onCallUserNotificationRule.OnCallUserNotificationRule(scope: Construct, id: string, config: OnCallUserNotificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig">OnCallUserNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig">OnCallUserNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone">putPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetPhone">resetPhone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPhone` <a name="putPhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone"></a>

```typescript
public putPhone(value: OnCallUserNotificationRulePhone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---

##### `resetPhone` <a name="resetPhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetPhone"></a>

```typescript
public resetPhone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct"></a>

```typescript
import { onCallUserNotificationRule } from '@cdktn/provider-datadog'

onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement"></a>

```typescript
import { onCallUserNotificationRule } from '@cdktn/provider-datadog'

onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource"></a>

```typescript
import { onCallUserNotificationRule } from '@cdktn/provider-datadog'

onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport"></a>

```typescript
import { onCallUserNotificationRule } from '@cdktn/provider-datadog'

onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnCallUserNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnCallUserNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/on_call_user_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OnCallUserNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference">OnCallUserNotificationRulePhoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutesInput">delayMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phoneInput">phoneInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutes">delayMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phone"></a>

```typescript
public readonly phone: OnCallUserNotificationRulePhoneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference">OnCallUserNotificationRulePhoneOutputReference</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `delayMinutesInput`<sup>Optional</sup> <a name="delayMinutesInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutesInput"></a>

```typescript
public readonly delayMinutesInput: number;
```

- *Type:* number

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phoneInput"></a>

```typescript
public readonly phoneInput: IResolvable | OnCallUserNotificationRulePhone;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `delayMinutes`<sup>Required</sup> <a name="delayMinutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutes"></a>

```typescript
public readonly delayMinutes: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallUserNotificationRuleConfig <a name="OnCallUserNotificationRuleConfig" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.Initializer"></a>

```typescript
import { onCallUserNotificationRule } from '@cdktn/provider-datadog'

const onCallUserNotificationRuleConfig: onCallUserNotificationRule.OnCallUserNotificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.category">category</a></code> | <code>string</code> | Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.channelId">channelId</a></code> | <code>string</code> | ID of the notification channel to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.delayMinutes">delayMinutes</a></code> | <code>number</code> | Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.userId">userId</a></code> | <code>string</code> | ID of the user to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | phone block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/on_call_user_notification_rule#category OnCallUserNotificationRule#category}

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

ID of the notification channel to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/on_call_user_notification_rule#channel_id OnCallUserNotificationRule#channel_id}

---

##### `delayMinutes`<sup>Required</sup> <a name="delayMinutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.delayMinutes"></a>

```typescript
public readonly delayMinutes: number;
```

- *Type:* number

Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/on_call_user_notification_rule#delay_minutes OnCallUserNotificationRule#delay_minutes}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

ID of the user to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/on_call_user_notification_rule#user_id OnCallUserNotificationRule#user_id}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.phone"></a>

```typescript
public readonly phone: OnCallUserNotificationRulePhone;
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/on_call_user_notification_rule#phone OnCallUserNotificationRule#phone}

---

### OnCallUserNotificationRulePhone <a name="OnCallUserNotificationRulePhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.Initializer"></a>

```typescript
import { onCallUserNotificationRule } from '@cdktn/provider-datadog'

const onCallUserNotificationRulePhone: onCallUserNotificationRule.OnCallUserNotificationRulePhone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.property.method">method</a></code> | <code>string</code> | Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/on_call_user_notification_rule#method OnCallUserNotificationRule#method}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallUserNotificationRulePhoneOutputReference <a name="OnCallUserNotificationRulePhoneOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer"></a>

```typescript
import { onCallUserNotificationRule } from '@cdktn/provider-datadog'

new onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resetMethod">resetMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallUserNotificationRulePhone;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---



