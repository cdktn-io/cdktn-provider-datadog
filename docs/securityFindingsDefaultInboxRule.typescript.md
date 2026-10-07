# `securityFindingsDefaultInboxRule` Submodule <a name="`securityFindingsDefaultInboxRule` Submodule" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsDefaultInboxRule <a name="SecurityFindingsDefaultInboxRule" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_default_inbox_rule datadog_security_findings_default_inbox_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

new securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule(scope: Construct, id: string, config?: SecurityFindingsDefaultInboxRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig">SecurityFindingsDefaultInboxRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig">SecurityFindingsDefaultInboxRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsDefaultInboxRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isConstruct"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformElement"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformResource"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityFindingsDefaultInboxRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsDefaultInboxRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsDefaultInboxRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_default_inbox_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsDefaultInboxRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference">SecurityFindingsDefaultInboxRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference">SecurityFindingsDefaultInboxRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.action"></a>

```typescript
public readonly action: SecurityFindingsDefaultInboxRuleActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference">SecurityFindingsDefaultInboxRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.rule"></a>

```typescript
public readonly rule: SecurityFindingsDefaultInboxRuleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference">SecurityFindingsDefaultInboxRuleRuleOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsDefaultInboxRuleAction <a name="SecurityFindingsDefaultInboxRuleAction" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction.Initializer"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

const securityFindingsDefaultInboxRuleAction: securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction = { ... }
```


### SecurityFindingsDefaultInboxRuleConfig <a name="SecurityFindingsDefaultInboxRuleConfig" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.Initializer"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

const securityFindingsDefaultInboxRuleConfig: securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the default inbox rule is enabled for the organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the default inbox rule is enabled for the organization.

When not set, the rule's current server-side value is adopted; declare it to manage the value. Default inbox rules are enabled unless disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_default_inbox_rule#enabled SecurityFindingsDefaultInboxRule#enabled}

---

### SecurityFindingsDefaultInboxRuleRule <a name="SecurityFindingsDefaultInboxRuleRule" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule.Initializer"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

const securityFindingsDefaultInboxRuleRule: securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsDefaultInboxRuleActionOutputReference <a name="SecurityFindingsDefaultInboxRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

new securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction">SecurityFindingsDefaultInboxRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityFindingsDefaultInboxRuleAction;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction">SecurityFindingsDefaultInboxRuleAction</a>

---


### SecurityFindingsDefaultInboxRuleRuleOutputReference <a name="SecurityFindingsDefaultInboxRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer"></a>

```typescript
import { securityFindingsDefaultInboxRule } from '@cdktn/provider-datadog'

new securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.findingTypes">findingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule">SecurityFindingsDefaultInboxRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.findingTypes"></a>

```typescript
public readonly findingTypes: string[];
```

- *Type:* string[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityFindingsDefaultInboxRuleRule;
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule">SecurityFindingsDefaultInboxRuleRule</a>

---



