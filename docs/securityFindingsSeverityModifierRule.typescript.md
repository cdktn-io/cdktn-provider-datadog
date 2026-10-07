# `securityFindingsSeverityModifierRule` Submodule <a name="`securityFindingsSeverityModifierRule` Submodule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsSeverityModifierRule <a name="SecurityFindingsSeverityModifierRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule datadog_security_findings_severity_modifier_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

new securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule(scope: Construct, id: string, config: SecurityFindingsSeverityModifierRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig">SecurityFindingsSeverityModifierRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig">SecurityFindingsSeverityModifierRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction"></a>

```typescript
public putAction(value: SecurityFindingsSeverityModifierRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule"></a>

```typescript
public putRule(value: SecurityFindingsSeverityModifierRuleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsSeverityModifierRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsSeverityModifierRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsSeverityModifierRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action"></a>

```typescript
public readonly action: SecurityFindingsSeverityModifierRuleActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule"></a>

```typescript
public readonly rule: SecurityFindingsSeverityModifierRuleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | SecurityFindingsSeverityModifierRuleAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | SecurityFindingsSeverityModifierRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsSeverityModifierRuleAction <a name="SecurityFindingsSeverityModifierRuleAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

const securityFindingsSeverityModifierRuleAction: securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set">set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | Sets matched findings to a fixed severity. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift">shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | Shifts matched findings up or down by one severity rank. |

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set"></a>

```typescript
public readonly set: SecurityFindingsSeverityModifierRuleActionSet;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

Sets matched findings to a fixed severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#set SecurityFindingsSeverityModifierRule#set}

---

##### `shift`<sup>Optional</sup> <a name="shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift"></a>

```typescript
public readonly shift: SecurityFindingsSeverityModifierRuleActionShift;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

Shifts matched findings up or down by one severity rank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#shift SecurityFindingsSeverityModifierRule#shift}

---

### SecurityFindingsSeverityModifierRuleActionSet <a name="SecurityFindingsSeverityModifierRuleActionSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

const securityFindingsSeverityModifierRuleActionSet: securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity">severity</a></code> | <code>string</code> | The severity to assign to matched findings. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description">description</a></code> | <code>string</code> | An optional free-form explanation for the severity change. |

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The severity to assign to matched findings.

`info_none` is not supported for the `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, or `static_code_vulnerability` finding types. Valid values are `info_none`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#severity SecurityFindingsSeverityModifierRule#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleActionShift <a name="SecurityFindingsSeverityModifierRuleActionShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

const securityFindingsSeverityModifierRuleActionShift: securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta">severityDelta</a></code> | <code>string</code> | The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description">description</a></code> | <code>string</code> | An optional free-form explanation for the severity change. |

---

##### `severityDelta`<sup>Required</sup> <a name="severityDelta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta"></a>

```typescript
public readonly severityDelta: string;
```

- *Type:* string

The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#severity_delta SecurityFindingsSeverityModifierRule#severity_delta}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleConfig <a name="SecurityFindingsSeverityModifierRuleConfig" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

const securityFindingsSeverityModifierRuleConfig: securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | The action to take when a severity modifier rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the severity modifier rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the severity modifier rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action"></a>

```typescript
public readonly action: SecurityFindingsSeverityModifierRuleAction;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

The action to take when a severity modifier rule matches a finding.

This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one severity rank. In this resource the union is expressed as the `set` and `shift` blocks; exactly one must be provided. A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace. Use `@severity_details.adjusted.value` instead, which reflects the severity before user-defined adjustments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#action SecurityFindingsSeverityModifierRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the severity modifier rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#name SecurityFindingsSeverityModifierRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule"></a>

```typescript
public readonly rule: SecurityFindingsSeverityModifierRuleRule;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#rule SecurityFindingsSeverityModifierRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the severity modifier rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#enabled SecurityFindingsSeverityModifierRule#enabled}

---

### SecurityFindingsSeverityModifierRuleRule <a name="SecurityFindingsSeverityModifierRuleRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

const securityFindingsSeverityModifierRuleRule: securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes">findingTypes</a></code> | <code>string[]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query">query</a></code> | <code>string</code> | A search query to further filter the findings matched by this rule. |

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes"></a>

```typescript
public readonly findingTypes: string[];
```

- *Type:* string[]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#finding_types SecurityFindingsSeverityModifierRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#query SecurityFindingsSeverityModifierRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsSeverityModifierRuleActionOutputReference <a name="SecurityFindingsSeverityModifierRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

new securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift">putShift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet">resetSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift">resetShift</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSet` <a name="putSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet"></a>

```typescript
public putSet(value: SecurityFindingsSeverityModifierRuleActionSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---

##### `putShift` <a name="putShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift"></a>

```typescript
public putShift(value: SecurityFindingsSeverityModifierRuleActionShift): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---

##### `resetSet` <a name="resetSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```

##### `resetShift` <a name="resetShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift"></a>

```typescript
public resetShift(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set">set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift">shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput">setInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput">shiftInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set"></a>

```typescript
public readonly set: SecurityFindingsSeverityModifierRuleActionSetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a>

---

##### `shift`<sup>Required</sup> <a name="shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift"></a>

```typescript
public readonly shift: SecurityFindingsSeverityModifierRuleActionShiftOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput"></a>

```typescript
public readonly setInput: IResolvable | SecurityFindingsSeverityModifierRuleActionSet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---

##### `shiftInput`<sup>Optional</sup> <a name="shiftInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput"></a>

```typescript
public readonly shiftInput: IResolvable | SecurityFindingsSeverityModifierRuleActionShift;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsSeverityModifierRuleAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---


### SecurityFindingsSeverityModifierRuleActionSetOutputReference <a name="SecurityFindingsSeverityModifierRuleActionSetOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

new securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsSeverityModifierRuleActionSet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---


### SecurityFindingsSeverityModifierRuleActionShiftOutputReference <a name="SecurityFindingsSeverityModifierRuleActionShiftOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

new securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput">severityDeltaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta">severityDelta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `severityDeltaInput`<sup>Optional</sup> <a name="severityDeltaInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput"></a>

```typescript
public readonly severityDeltaInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `severityDelta`<sup>Required</sup> <a name="severityDelta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta"></a>

```typescript
public readonly severityDelta: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsSeverityModifierRuleActionShift;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---


### SecurityFindingsSeverityModifierRuleRuleOutputReference <a name="SecurityFindingsSeverityModifierRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer"></a>

```typescript
import { securityFindingsSeverityModifierRule } from '@cdktn/provider-datadog'

new securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput">findingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes">findingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `findingTypesInput`<sup>Optional</sup> <a name="findingTypesInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput"></a>

```typescript
public readonly findingTypesInput: string[];
```

- *Type:* string[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes"></a>

```typescript
public readonly findingTypes: string[];
```

- *Type:* string[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsSeverityModifierRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---



