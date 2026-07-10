# `securityFindingsDueDateRule` Submodule <a name="`securityFindingsDueDateRule` Submodule" id="@cdktn/provider-datadog.securityFindingsDueDateRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsDueDateRule <a name="SecurityFindingsDueDateRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule datadog_security_findings_due_date_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

new securityFindingsDueDateRule.SecurityFindingsDueDateRule(scope: Construct, id: string, config: SecurityFindingsDueDateRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig">SecurityFindingsDueDateRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig">SecurityFindingsDueDateRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction"></a>

```typescript
public putAction(value: SecurityFindingsDueDateRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule"></a>

```typescript
public putRule(value: SecurityFindingsDueDateRuleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsDueDateRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsDueDateRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsDueDateRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference">SecurityFindingsDueDateRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference">SecurityFindingsDueDateRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.action"></a>

```typescript
public readonly action: SecurityFindingsDueDateRuleActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference">SecurityFindingsDueDateRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.rule"></a>

```typescript
public readonly rule: SecurityFindingsDueDateRuleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference">SecurityFindingsDueDateRuleRuleOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | SecurityFindingsDueDateRuleAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | SecurityFindingsDueDateRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsDueDateRuleAction <a name="SecurityFindingsDueDateRuleAction" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

const securityFindingsDueDateRuleAction: securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueDaysPerSeverity">dueDaysPerSeverity</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>[]</code> | A list of severity-to-due-date mappings. Each severity may appear at most once. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueFrom">dueFrom</a></code> | <code>string</code> | The reference point from which the due date is calculated. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.reasonDescription">reasonDescription</a></code> | <code>string</code> | An optional description providing more context for the due date assignment. |

---

##### `dueDaysPerSeverity`<sup>Required</sup> <a name="dueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueDaysPerSeverity"></a>

```typescript
public readonly dueDaysPerSeverity: IResolvable | SecurityFindingsDueDateRuleActionDueDaysPerSeverity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>[]

A list of severity-to-due-date mappings. Each severity may appear at most once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#due_days_per_severity SecurityFindingsDueDateRule#due_days_per_severity}

---

##### `dueFrom`<sup>Required</sup> <a name="dueFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueFrom"></a>

```typescript
public readonly dueFrom: string;
```

- *Type:* string

The reference point from which the due date is calculated.

When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead. Valid values are `first_seen`, `fix_available`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#due_from SecurityFindingsDueDateRule#due_from}

---

##### `reasonDescription`<sup>Optional</sup> <a name="reasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.reasonDescription"></a>

```typescript
public readonly reasonDescription: string;
```

- *Type:* string

An optional description providing more context for the due date assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#reason_description SecurityFindingsDueDateRule#reason_description}

---

### SecurityFindingsDueDateRuleActionDueDaysPerSeverity <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

const securityFindingsDueDateRuleActionDueDaysPerSeverity: securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.dueInDays">dueInDays</a></code> | <code>number</code> | The number of days from the reference point until the finding is due. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.severity">severity</a></code> | <code>string</code> | A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`. |

---

##### `dueInDays`<sup>Required</sup> <a name="dueInDays" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.dueInDays"></a>

```typescript
public readonly dueInDays: number;
```

- *Type:* number

The number of days from the reference point until the finding is due.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#due_in_days SecurityFindingsDueDateRule#due_in_days}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#severity SecurityFindingsDueDateRule#severity}

---

### SecurityFindingsDueDateRuleConfig <a name="SecurityFindingsDueDateRuleConfig" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

const securityFindingsDueDateRuleConfig: securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | The action to take when the due date rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the due date rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the due date rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.action"></a>

```typescript
public readonly action: SecurityFindingsDueDateRuleAction;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

The action to take when the due date rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#action SecurityFindingsDueDateRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the due date rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#name SecurityFindingsDueDateRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.rule"></a>

```typescript
public readonly rule: SecurityFindingsDueDateRuleRule;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#rule SecurityFindingsDueDateRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the due date rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#enabled SecurityFindingsDueDateRule#enabled}

---

### SecurityFindingsDueDateRuleRule <a name="SecurityFindingsDueDateRuleRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

const securityFindingsDueDateRuleRule: securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.findingTypes">findingTypes</a></code> | <code>string[]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.query">query</a></code> | <code>string</code> | A search query to further filter the findings matched by this rule. |

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.findingTypes"></a>

```typescript
public readonly findingTypes: string[];
```

- *Type:* string[]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#finding_types SecurityFindingsDueDateRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_due_date_rule#query SecurityFindingsDueDateRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsDueDateRuleActionDueDaysPerSeverityList <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverityList" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

new securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get"></a>

```typescript
public get(index: number): SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsDueDateRuleActionDueDaysPerSeverity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>[]

---


### SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

new securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDaysInput">dueInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDays">dueInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dueInDaysInput`<sup>Optional</sup> <a name="dueInDaysInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDaysInput"></a>

```typescript
public readonly dueInDaysInput: number;
```

- *Type:* number

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `dueInDays`<sup>Required</sup> <a name="dueInDays" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDays"></a>

```typescript
public readonly dueInDays: number;
```

- *Type:* number

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsDueDateRuleActionDueDaysPerSeverity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>

---


### SecurityFindingsDueDateRuleActionOutputReference <a name="SecurityFindingsDueDateRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

new securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity">putDueDaysPerSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resetReasonDescription">resetReasonDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDueDaysPerSeverity` <a name="putDueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity"></a>

```typescript
public putDueDaysPerSeverity(value: IResolvable | SecurityFindingsDueDateRuleActionDueDaysPerSeverity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>[]

---

##### `resetReasonDescription` <a name="resetReasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resetReasonDescription"></a>

```typescript
public resetReasonDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverity">dueDaysPerSeverity</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList">SecurityFindingsDueDateRuleActionDueDaysPerSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverityInput">dueDaysPerSeverityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFromInput">dueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescriptionInput">reasonDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFrom">dueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescription">reasonDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dueDaysPerSeverity`<sup>Required</sup> <a name="dueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverity"></a>

```typescript
public readonly dueDaysPerSeverity: SecurityFindingsDueDateRuleActionDueDaysPerSeverityList;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList">SecurityFindingsDueDateRuleActionDueDaysPerSeverityList</a>

---

##### `dueDaysPerSeverityInput`<sup>Optional</sup> <a name="dueDaysPerSeverityInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverityInput"></a>

```typescript
public readonly dueDaysPerSeverityInput: IResolvable | SecurityFindingsDueDateRuleActionDueDaysPerSeverity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>[]

---

##### `dueFromInput`<sup>Optional</sup> <a name="dueFromInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFromInput"></a>

```typescript
public readonly dueFromInput: string;
```

- *Type:* string

---

##### `reasonDescriptionInput`<sup>Optional</sup> <a name="reasonDescriptionInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescriptionInput"></a>

```typescript
public readonly reasonDescriptionInput: string;
```

- *Type:* string

---

##### `dueFrom`<sup>Required</sup> <a name="dueFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFrom"></a>

```typescript
public readonly dueFrom: string;
```

- *Type:* string

---

##### `reasonDescription`<sup>Required</sup> <a name="reasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescription"></a>

```typescript
public readonly reasonDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsDueDateRuleAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---


### SecurityFindingsDueDateRuleRuleOutputReference <a name="SecurityFindingsDueDateRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer"></a>

```typescript
import { securityFindingsDueDateRule } from '@cdktn/provider-datadog'

new securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypesInput">findingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypes">findingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `findingTypesInput`<sup>Optional</sup> <a name="findingTypesInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypesInput"></a>

```typescript
public readonly findingTypesInput: string[];
```

- *Type:* string[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypes"></a>

```typescript
public readonly findingTypes: string[];
```

- *Type:* string[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsDueDateRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---



