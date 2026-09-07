# `actionExecutionPolicy` Submodule <a name="`actionExecutionPolicy` Submodule" id="@cdktn/provider-datadog.actionExecutionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionExecutionPolicy <a name="ActionExecutionPolicy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy datadog_action_execution_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicy(scope: Construct, id: string, config: ActionExecutionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig">ActionExecutionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig">ActionExecutionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern">putActionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionPattern` <a name="putActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern"></a>

```typescript
public putActionPattern(value: ActionExecutionPolicyActionPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope"></a>

```typescript
public putScope(value: ActionExecutionPolicyScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget"></a>

```typescript
public putTarget(value: IResolvable | ActionExecutionPolicyTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]

---

##### `resetScope` <a name="resetScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget"></a>

```typescript
public resetTarget(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

actionExecutionPolicy.ActionExecutionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionExecutionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionExecutionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ActionExecutionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern">actionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target">target</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput">actionPatternInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput">scopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput">targetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionPattern`<sup>Required</sup> <a name="actionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern"></a>

```typescript
public readonly actionPattern: ActionExecutionPolicyActionPatternOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope"></a>

```typescript
public readonly scope: ActionExecutionPolicyScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target"></a>

```typescript
public readonly target: ActionExecutionPolicyTargetList;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `actionPatternInput`<sup>Optional</sup> <a name="actionPatternInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput"></a>

```typescript
public readonly actionPatternInput: IResolvable | ActionExecutionPolicyActionPattern;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput"></a>

```typescript
public readonly scopeInput: IResolvable | ActionExecutionPolicyScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | ActionExecutionPolicyTarget[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionExecutionPolicyActionPattern <a name="ActionExecutionPolicyActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyActionPattern: actionExecutionPolicy.ActionExecutionPolicyActionPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns">actionFqns</a></code> | <code>string[]</code> | The fully qualified action names this policy matches. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration">integration</a></code> | <code>string</code> | The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`. |

---

##### `actionFqns`<sup>Required</sup> <a name="actionFqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns"></a>

```typescript
public readonly actionFqns: string[];
```

- *Type:* string[]

The fully qualified action names this policy matches.

Use `*` to match all actions of the integration, or a fully qualified name prefixed with the integration's action namespace (for example `com.datadoghq.script.*` for the Script integration).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_fqns ActionExecutionPolicy#action_fqns}

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration"></a>

```typescript
public readonly integration: string;
```

- *Type:* string

The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#integration ActionExecutionPolicy#integration}

---

### ActionExecutionPolicyConfig <a name="ActionExecutionPolicyConfig" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyConfig: actionExecutionPolicy.ActionExecutionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern">actionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | action_pattern block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect">effect</a></code> | <code>string</code> | Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the execution policy. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target">target</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]</code> | target block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionPattern`<sup>Required</sup> <a name="actionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern"></a>

```typescript
public readonly actionPattern: ActionExecutionPolicyActionPattern;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

action_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_pattern ActionExecutionPolicy#action_pattern}

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#effect ActionExecutionPolicy#effect}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the execution policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope"></a>

```typescript
public readonly scope: ActionExecutionPolicyScope;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scope ActionExecutionPolicy#scope}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target"></a>

```typescript
public readonly target: IResolvable | ActionExecutionPolicyTarget[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target ActionExecutionPolicy#target}

---

### ActionExecutionPolicyScope <a name="ActionExecutionPolicyScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyScope: actionExecutionPolicy.ActionExecutionPolicyScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell">remoteActionRshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | remote_action_rshell block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts">scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | scripts block. |

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes"></a>

```typescript
public readonly kubernetes: ActionExecutionPolicyScopeKubernetes;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#kubernetes ActionExecutionPolicy#kubernetes}

---

##### `remoteActionRshell`<sup>Optional</sup> <a name="remoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell"></a>

```typescript
public readonly remoteActionRshell: ActionExecutionPolicyScopeRemoteActionRshell;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

remote_action_rshell block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#remote_action_rshell ActionExecutionPolicy#remote_action_rshell}

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts"></a>

```typescript
public readonly scripts: ActionExecutionPolicyScopeScripts;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scripts ActionExecutionPolicy#scripts}

---

### ActionExecutionPolicyScopeKubernetes <a name="ActionExecutionPolicyScopeKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyScopeKubernetes: actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]</code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule"></a>

```typescript
public readonly rule: IResolvable | ActionExecutionPolicyScopeKubernetesRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeKubernetesRule <a name="ActionExecutionPolicyScopeKubernetesRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyScopeKubernetesRule: actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces">targetNamespaces</a></code> | <code>string[]</code> | The Kubernetes namespaces this rule applies to. |

---

##### `targetNamespaces`<sup>Required</sup> <a name="targetNamespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces"></a>

```typescript
public readonly targetNamespaces: string[];
```

- *Type:* string[]

The Kubernetes namespaces this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_namespaces ActionExecutionPolicy#target_namespaces}

---

### ActionExecutionPolicyScopeRemoteActionRshell <a name="ActionExecutionPolicyScopeRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyScopeRemoteActionRshell: actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]</code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule"></a>

```typescript
public readonly rule: IResolvable | ActionExecutionPolicyScopeRemoteActionRshellRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeRemoteActionRshellRule <a name="ActionExecutionPolicyScopeRemoteActionRshellRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyScopeRemoteActionRshellRule: actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access">access</a></code> | <code>string</code> | The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths">targetPaths</a></code> | <code>string[]</code> | The filesystem paths this rule applies to. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#access ActionExecutionPolicy#access}

---

##### `targetPaths`<sup>Required</sup> <a name="targetPaths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths"></a>

```typescript
public readonly targetPaths: string[];
```

- *Type:* string[]

The filesystem paths this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_paths ActionExecutionPolicy#target_paths}

---

### ActionExecutionPolicyScopeScripts <a name="ActionExecutionPolicyScopeScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyScopeScripts: actionExecutionPolicy.ActionExecutionPolicyScopeScripts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]</code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule"></a>

```typescript
public readonly rule: IResolvable | ActionExecutionPolicyScopeScriptsRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeScriptsRule <a name="ActionExecutionPolicyScopeScriptsRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyScopeScriptsRule: actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames">targetScriptNames</a></code> | <code>string[]</code> | The script names this rule applies to. |

---

##### `targetScriptNames`<sup>Required</sup> <a name="targetScriptNames" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames"></a>

```typescript
public readonly targetScriptNames: string[];
```

- *Type:* string[]

The script names this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_script_names ActionExecutionPolicy#target_script_names}

---

### ActionExecutionPolicyTarget <a name="ActionExecutionPolicyTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

const actionExecutionPolicyTarget: actionExecutionPolicy.ActionExecutionPolicyTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags">agentTags</a></code> | <code>string[]</code> | The Agent tags identifying the target, for example `env:prod`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name">name</a></code> | <code>string</code> | A human-readable name for the target. |

---

##### `agentTags`<sup>Required</sup> <a name="agentTags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags"></a>

```typescript
public readonly agentTags: string[];
```

- *Type:* string[]

The Agent tags identifying the target, for example `env:prod`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#agent_tags ActionExecutionPolicy#agent_tags}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionExecutionPolicyActionPatternOutputReference <a name="ActionExecutionPolicyActionPatternOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput">actionFqnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput">integrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns">actionFqns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration">integration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFqnsInput`<sup>Optional</sup> <a name="actionFqnsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput"></a>

```typescript
public readonly actionFqnsInput: string[];
```

- *Type:* string[]

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput"></a>

```typescript
public readonly integrationInput: string;
```

- *Type:* string

---

##### `actionFqns`<sup>Required</sup> <a name="actionFqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns"></a>

```typescript
public readonly actionFqns: string[];
```

- *Type:* string[]

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration"></a>

```typescript
public readonly integration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyActionPattern;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---


### ActionExecutionPolicyScopeKubernetesOutputReference <a name="ActionExecutionPolicyScopeKubernetesOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | ActionExecutionPolicyScopeKubernetesRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]

---

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule"></a>

```typescript
public readonly rule: ActionExecutionPolicyScopeKubernetesRuleList;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | ActionExecutionPolicyScopeKubernetesRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeKubernetes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---


### ActionExecutionPolicyScopeKubernetesRuleList <a name="ActionExecutionPolicyScopeKubernetesRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get"></a>

```typescript
public get(index: number): ActionExecutionPolicyScopeKubernetesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeKubernetesRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]

---


### ActionExecutionPolicyScopeKubernetesRuleOutputReference <a name="ActionExecutionPolicyScopeKubernetesRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput">targetNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces">targetNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetNamespacesInput`<sup>Optional</sup> <a name="targetNamespacesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput"></a>

```typescript
public readonly targetNamespacesInput: string[];
```

- *Type:* string[]

---

##### `targetNamespaces`<sup>Required</sup> <a name="targetNamespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces"></a>

```typescript
public readonly targetNamespaces: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeKubernetesRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>

---


### ActionExecutionPolicyScopeOutputReference <a name="ActionExecutionPolicyScopeOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell">putRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts">putScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell">resetRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts">resetScripts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKubernetes` <a name="putKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes"></a>

```typescript
public putKubernetes(value: ActionExecutionPolicyScopeKubernetes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---

##### `putRemoteActionRshell` <a name="putRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell"></a>

```typescript
public putRemoteActionRshell(value: ActionExecutionPolicyScopeRemoteActionRshell): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---

##### `putScripts` <a name="putScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts"></a>

```typescript
public putScripts(value: ActionExecutionPolicyScopeScripts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes"></a>

```typescript
public resetKubernetes(): void
```

##### `resetRemoteActionRshell` <a name="resetRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell"></a>

```typescript
public resetRemoteActionRshell(): void
```

##### `resetScripts` <a name="resetScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts"></a>

```typescript
public resetScripts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell">remoteActionRshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts">scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput">kubernetesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput">remoteActionRshellInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput">scriptsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes"></a>

```typescript
public readonly kubernetes: ActionExecutionPolicyScopeKubernetesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a>

---

##### `remoteActionRshell`<sup>Required</sup> <a name="remoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell"></a>

```typescript
public readonly remoteActionRshell: ActionExecutionPolicyScopeRemoteActionRshellOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a>

---

##### `scripts`<sup>Required</sup> <a name="scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts"></a>

```typescript
public readonly scripts: ActionExecutionPolicyScopeScriptsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput"></a>

```typescript
public readonly kubernetesInput: IResolvable | ActionExecutionPolicyScopeKubernetes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---

##### `remoteActionRshellInput`<sup>Optional</sup> <a name="remoteActionRshellInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput"></a>

```typescript
public readonly remoteActionRshellInput: IResolvable | ActionExecutionPolicyScopeRemoteActionRshell;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---

##### `scriptsInput`<sup>Optional</sup> <a name="scriptsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput"></a>

```typescript
public readonly scriptsInput: IResolvable | ActionExecutionPolicyScopeScripts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---


### ActionExecutionPolicyScopeRemoteActionRshellOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | ActionExecutionPolicyScopeRemoteActionRshellRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]

---

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule"></a>

```typescript
public readonly rule: ActionExecutionPolicyScopeRemoteActionRshellRuleList;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | ActionExecutionPolicyScopeRemoteActionRshellRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeRemoteActionRshell;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleList <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get"></a>

```typescript
public get(index: number): ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeRemoteActionRshellRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput">targetPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths">targetPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `targetPathsInput`<sup>Optional</sup> <a name="targetPathsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput"></a>

```typescript
public readonly targetPathsInput: string[];
```

- *Type:* string[]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `targetPaths`<sup>Required</sup> <a name="targetPaths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths"></a>

```typescript
public readonly targetPaths: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeRemoteActionRshellRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>

---


### ActionExecutionPolicyScopeScriptsOutputReference <a name="ActionExecutionPolicyScopeScriptsOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | ActionExecutionPolicyScopeScriptsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]

---

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule"></a>

```typescript
public readonly rule: ActionExecutionPolicyScopeScriptsRuleList;
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | ActionExecutionPolicyScopeScriptsRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeScripts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---


### ActionExecutionPolicyScopeScriptsRuleList <a name="ActionExecutionPolicyScopeScriptsRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get"></a>

```typescript
public get(index: number): ActionExecutionPolicyScopeScriptsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeScriptsRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]

---


### ActionExecutionPolicyScopeScriptsRuleOutputReference <a name="ActionExecutionPolicyScopeScriptsRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput">targetScriptNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames">targetScriptNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetScriptNamesInput`<sup>Optional</sup> <a name="targetScriptNamesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput"></a>

```typescript
public readonly targetScriptNamesInput: string[];
```

- *Type:* string[]

---

##### `targetScriptNames`<sup>Required</sup> <a name="targetScriptNames" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames"></a>

```typescript
public readonly targetScriptNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyScopeScriptsRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>

---


### ActionExecutionPolicyTargetList <a name="ActionExecutionPolicyTargetList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get"></a>

```typescript
public get(index: number): ActionExecutionPolicyTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyTarget[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]

---


### ActionExecutionPolicyTargetOutputReference <a name="ActionExecutionPolicyTargetOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer"></a>

```typescript
import { actionExecutionPolicy } from '@cdktn/provider-datadog'

new actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput">agentTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags">agentTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentTagsInput`<sup>Optional</sup> <a name="agentTagsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput"></a>

```typescript
public readonly agentTagsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `agentTags`<sup>Required</sup> <a name="agentTags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags"></a>

```typescript
public readonly agentTags: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionExecutionPolicyTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>

---



