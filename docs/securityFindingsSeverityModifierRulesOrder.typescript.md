# `securityFindingsSeverityModifierRulesOrder` Submodule <a name="`securityFindingsSeverityModifierRulesOrder` Submodule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsSeverityModifierRulesOrder <a name="SecurityFindingsSeverityModifierRulesOrder" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rules_order datadog_security_findings_severity_modifier_rules_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRulesOrder } from '@cdktn/provider-datadog'

new securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder(scope: Construct, id: string, config: SecurityFindingsSeverityModifierRulesOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig">SecurityFindingsSeverityModifierRulesOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig">SecurityFindingsSeverityModifierRulesOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsSeverityModifierRulesOrder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isConstruct"></a>

```typescript
import { securityFindingsSeverityModifierRulesOrder } from '@cdktn/provider-datadog'

securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isTerraformElement"></a>

```typescript
import { securityFindingsSeverityModifierRulesOrder } from '@cdktn/provider-datadog'

securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isTerraformResource"></a>

```typescript
import { securityFindingsSeverityModifierRulesOrder } from '@cdktn/provider-datadog'

securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.generateConfigForImport"></a>

```typescript
import { securityFindingsSeverityModifierRulesOrder } from '@cdktn/provider-datadog'

securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityFindingsSeverityModifierRulesOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsSeverityModifierRulesOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsSeverityModifierRulesOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rules_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsSeverityModifierRulesOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.ruleIdsInput">ruleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.ruleIds">ruleIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleIdsInput`<sup>Optional</sup> <a name="ruleIdsInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.ruleIdsInput"></a>

```typescript
public readonly ruleIdsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ruleIds`<sup>Required</sup> <a name="ruleIds" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.ruleIds"></a>

```typescript
public readonly ruleIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsSeverityModifierRulesOrderConfig <a name="SecurityFindingsSeverityModifierRulesOrderConfig" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRulesOrder } from '@cdktn/provider-datadog'

const securityFindingsSeverityModifierRulesOrderConfig: securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.name">name</a></code> | <code>string</code> | A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.ruleIds">ruleIds</a></code> | <code>string[]</code> | The ordered list of all severity modifier rule IDs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rules_order#name SecurityFindingsSeverityModifierRulesOrder#name}

---

##### `ruleIds`<sup>Required</sup> <a name="ruleIds" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRulesOrder.SecurityFindingsSeverityModifierRulesOrderConfig.property.ruleIds"></a>

```typescript
public readonly ruleIds: string[];
```

- *Type:* string[]

The ordered list of all severity modifier rule IDs.

The order of IDs in this attribute defines the evaluation order of the severity modifier rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rules_order#rule_ids SecurityFindingsSeverityModifierRulesOrder#rule_ids}

---



