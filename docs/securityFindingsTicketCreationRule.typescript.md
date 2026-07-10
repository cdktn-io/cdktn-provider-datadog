# `securityFindingsTicketCreationRule` Submodule <a name="`securityFindingsTicketCreationRule` Submodule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsTicketCreationRule <a name="SecurityFindingsTicketCreationRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule datadog_security_findings_ticket_creation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

new securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule(scope: Construct, id: string, config: SecurityFindingsTicketCreationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig">SecurityFindingsTicketCreationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig">SecurityFindingsTicketCreationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction"></a>

```typescript
public putAction(value: SecurityFindingsTicketCreationRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule"></a>

```typescript
public putRule(value: SecurityFindingsTicketCreationRuleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsTicketCreationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsTicketCreationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsTicketCreationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference">SecurityFindingsTicketCreationRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference">SecurityFindingsTicketCreationRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.action"></a>

```typescript
public readonly action: SecurityFindingsTicketCreationRuleActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference">SecurityFindingsTicketCreationRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.rule"></a>

```typescript
public readonly rule: SecurityFindingsTicketCreationRuleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference">SecurityFindingsTicketCreationRuleRuleOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | SecurityFindingsTicketCreationRuleAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | SecurityFindingsTicketCreationRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsTicketCreationRuleAction <a name="SecurityFindingsTicketCreationRuleAction" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.Initializer"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

const securityFindingsTicketCreationRuleAction: securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.maxTicketsPerDay">maxTicketsPerDay</a></code> | <code>number</code> | The maximum number of tickets the rule may create per day. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.projectId">projectId</a></code> | <code>string</code> | The UUID of the Case Management project. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.target">target</a></code> | <code>string</code> | The ticketing system to create tickets in. Valid values are `jira`, `case_management`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.assigneeId">assigneeId</a></code> | <code>string</code> | The UUID of the default assignee for created tickets. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.fields">fields</a></code> | <code>string</code> | A JSON-encoded object of custom fields of the Jira issue to create. |

---

##### `maxTicketsPerDay`<sup>Required</sup> <a name="maxTicketsPerDay" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.maxTicketsPerDay"></a>

```typescript
public readonly maxTicketsPerDay: number;
```

- *Type:* number

The maximum number of tickets the rule may create per day.

If exceeded, one final ticket will be created, explaining the limit was hit and linking back to the responsible rule. Value must be between 1 and 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#max_tickets_per_day SecurityFindingsTicketCreationRule#max_tickets_per_day}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The UUID of the Case Management project. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#project_id SecurityFindingsTicketCreationRule#project_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The ticketing system to create tickets in. Valid values are `jira`, `case_management`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#target SecurityFindingsTicketCreationRule#target}

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.assigneeId"></a>

```typescript
public readonly assigneeId: string;
```

- *Type:* string

The UUID of the default assignee for created tickets. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#assignee_id SecurityFindingsTicketCreationRule#assignee_id}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.fields"></a>

```typescript
public readonly fields: string;
```

- *Type:* string

A JSON-encoded object of custom fields of the Jira issue to create.

For the list of available fields, see the [Jira documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issues/#api-rest-api-2-issue-createmeta-projectidorkey-issuetypes-issuetypeid-get).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#fields SecurityFindingsTicketCreationRule#fields}

---

### SecurityFindingsTicketCreationRuleConfig <a name="SecurityFindingsTicketCreationRuleConfig" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.Initializer"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

const securityFindingsTicketCreationRuleConfig: securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | The action to take when the ticket creation rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the ticket creation rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the ticket creation rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.action"></a>

```typescript
public readonly action: SecurityFindingsTicketCreationRuleAction;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

The action to take when the ticket creation rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#action SecurityFindingsTicketCreationRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ticket creation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#name SecurityFindingsTicketCreationRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.rule"></a>

```typescript
public readonly rule: SecurityFindingsTicketCreationRuleRule;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#rule SecurityFindingsTicketCreationRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the ticket creation rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#enabled SecurityFindingsTicketCreationRule#enabled}

---

### SecurityFindingsTicketCreationRuleRule <a name="SecurityFindingsTicketCreationRuleRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.Initializer"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

const securityFindingsTicketCreationRuleRule: securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.findingTypes">findingTypes</a></code> | <code>string[]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.query">query</a></code> | <code>string</code> | A search query to further filter the findings matched by this rule. |

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.findingTypes"></a>

```typescript
public readonly findingTypes: string[];
```

- *Type:* string[]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#finding_types SecurityFindingsTicketCreationRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#query SecurityFindingsTicketCreationRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsTicketCreationRuleActionOutputReference <a name="SecurityFindingsTicketCreationRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

new securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetAssigneeId">resetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssigneeId` <a name="resetAssigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetAssigneeId"></a>

```typescript
public resetAssigneeId(): void
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.autoDisabledReason">autoDisabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeIdInput">assigneeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDayInput">maxTicketsPerDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeId">assigneeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fields">fields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDay">maxTicketsPerDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoDisabledReason`<sup>Required</sup> <a name="autoDisabledReason" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.autoDisabledReason"></a>

```typescript
public readonly autoDisabledReason: string;
```

- *Type:* string

---

##### `assigneeIdInput`<sup>Optional</sup> <a name="assigneeIdInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeIdInput"></a>

```typescript
public readonly assigneeIdInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string;
```

- *Type:* string

---

##### `maxTicketsPerDayInput`<sup>Optional</sup> <a name="maxTicketsPerDayInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDayInput"></a>

```typescript
public readonly maxTicketsPerDayInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `assigneeId`<sup>Required</sup> <a name="assigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeId"></a>

```typescript
public readonly assigneeId: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fields"></a>

```typescript
public readonly fields: string;
```

- *Type:* string

---

##### `maxTicketsPerDay`<sup>Required</sup> <a name="maxTicketsPerDay" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDay"></a>

```typescript
public readonly maxTicketsPerDay: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsTicketCreationRuleAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---


### SecurityFindingsTicketCreationRuleRuleOutputReference <a name="SecurityFindingsTicketCreationRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer"></a>

```typescript
import { securityFindingsTicketCreationRule } from '@cdktn/provider-datadog'

new securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypesInput">findingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypes">findingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `findingTypesInput`<sup>Optional</sup> <a name="findingTypesInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypesInput"></a>

```typescript
public readonly findingTypesInput: string[];
```

- *Type:* string[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypes"></a>

```typescript
public readonly findingTypes: string[];
```

- *Type:* string[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityFindingsTicketCreationRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---



