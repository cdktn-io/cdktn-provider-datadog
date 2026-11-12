# `githubOidcIntakeMapping` Submodule <a name="`githubOidcIntakeMapping` Submodule" id="@cdktn/provider-datadog.githubOidcIntakeMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubOidcIntakeMapping <a name="GithubOidcIntakeMapping" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping datadog_github_oidc_intake_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer"></a>

```typescript
import { githubOidcIntakeMapping } from '@cdktn/provider-datadog'

new githubOidcIntakeMapping.GithubOidcIntakeMapping(scope: Construct, id: string, config?: GithubOidcIntakeMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig">GithubOidcIntakeMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig">GithubOidcIntakeMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers">putClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetClaimMatchers">resetClaimMatchers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClaimMatchers` <a name="putClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers"></a>

```typescript
public putClaimMatchers(value: GithubOidcIntakeMappingClaimMatchers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

---

##### `resetClaimMatchers` <a name="resetClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetClaimMatchers"></a>

```typescript
public resetClaimMatchers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GithubOidcIntakeMapping resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct"></a>

```typescript
import { githubOidcIntakeMapping } from '@cdktn/provider-datadog'

githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement"></a>

```typescript
import { githubOidcIntakeMapping } from '@cdktn/provider-datadog'

githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource"></a>

```typescript
import { githubOidcIntakeMapping } from '@cdktn/provider-datadog'

githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport"></a>

```typescript
import { githubOidcIntakeMapping } from '@cdktn/provider-datadog'

githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GithubOidcIntakeMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubOidcIntakeMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubOidcIntakeMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GithubOidcIntakeMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchers">claimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference">GithubOidcIntakeMappingClaimMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchersInput">claimMatchersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `claimMatchers`<sup>Required</sup> <a name="claimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchers"></a>

```typescript
public readonly claimMatchers: GithubOidcIntakeMappingClaimMatchersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference">GithubOidcIntakeMappingClaimMatchersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `claimMatchersInput`<sup>Optional</sup> <a name="claimMatchersInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchersInput"></a>

```typescript
public readonly claimMatchersInput: IResolvable | GithubOidcIntakeMappingClaimMatchers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubOidcIntakeMappingClaimMatchers <a name="GithubOidcIntakeMappingClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.Initializer"></a>

```typescript
import { githubOidcIntakeMapping } from '@cdktn/provider-datadog'

const githubOidcIntakeMappingClaimMatchers: githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.sub">sub</a></code> | <code>string</code> | Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actor">actor</a></code> | <code>string</code> | Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actorId">actorId</a></code> | <code>string</code> | Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterprise">enterprise</a></code> | <code>string</code> | Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterpriseId">enterpriseId</a></code> | <code>string</code> | Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.environment">environment</a></code> | <code>string</code> | Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.eventName">eventName</a></code> | <code>string</code> | Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.jobWorkflowRef">jobWorkflowRef</a></code> | <code>string</code> | Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.ref">ref</a></code> | <code>string</code> | Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.refType">refType</a></code> | <code>string</code> | Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repository">repository</a></code> | <code>string</code> | Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryId">repositoryId</a></code> | <code>string</code> | Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwner">repositoryOwner</a></code> | <code>string</code> | Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwnerId">repositoryOwnerId</a></code> | <code>string</code> | Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryVisibility">repositoryVisibility</a></code> | <code>string</code> | Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.runnerEnvironment">runnerEnvironment</a></code> | <code>string</code> | Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflow">workflow</a></code> | <code>string</code> | Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflowRef">workflowRef</a></code> | <code>string</code> | Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. |

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.sub"></a>

```typescript
public readonly sub: string;
```

- *Type:* string

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#sub GithubOidcIntakeMapping#sub}

---

##### `actor`<sup>Optional</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actor"></a>

```typescript
public readonly actor: string;
```

- *Type:* string

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#actor GithubOidcIntakeMapping#actor}

---

##### `actorId`<sup>Optional</sup> <a name="actorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#actor_id GithubOidcIntakeMapping#actor_id}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterprise"></a>

```typescript
public readonly enterprise: string;
```

- *Type:* string

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#enterprise GithubOidcIntakeMapping#enterprise}

---

##### `enterpriseId`<sup>Optional</sup> <a name="enterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterpriseId"></a>

```typescript
public readonly enterpriseId: string;
```

- *Type:* string

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#enterprise_id GithubOidcIntakeMapping#enterprise_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#environment GithubOidcIntakeMapping#environment}

---

##### `eventName`<sup>Optional</sup> <a name="eventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.eventName"></a>

```typescript
public readonly eventName: string;
```

- *Type:* string

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#event_name GithubOidcIntakeMapping#event_name}

---

##### `jobWorkflowRef`<sup>Optional</sup> <a name="jobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.jobWorkflowRef"></a>

```typescript
public readonly jobWorkflowRef: string;
```

- *Type:* string

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#job_workflow_ref GithubOidcIntakeMapping#job_workflow_ref}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#ref GithubOidcIntakeMapping#ref}

---

##### `refType`<sup>Optional</sup> <a name="refType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.refType"></a>

```typescript
public readonly refType: string;
```

- *Type:* string

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#ref_type GithubOidcIntakeMapping#ref_type}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository GithubOidcIntakeMapping#repository}

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_id GithubOidcIntakeMapping#repository_id}

---

##### `repositoryOwner`<sup>Optional</sup> <a name="repositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwner"></a>

```typescript
public readonly repositoryOwner: string;
```

- *Type:* string

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_owner GithubOidcIntakeMapping#repository_owner}

---

##### `repositoryOwnerId`<sup>Optional</sup> <a name="repositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwnerId"></a>

```typescript
public readonly repositoryOwnerId: string;
```

- *Type:* string

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_owner_id GithubOidcIntakeMapping#repository_owner_id}

---

##### `repositoryVisibility`<sup>Optional</sup> <a name="repositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryVisibility"></a>

```typescript
public readonly repositoryVisibility: string;
```

- *Type:* string

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_visibility GithubOidcIntakeMapping#repository_visibility}

---

##### `runnerEnvironment`<sup>Optional</sup> <a name="runnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.runnerEnvironment"></a>

```typescript
public readonly runnerEnvironment: string;
```

- *Type:* string

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#runner_environment GithubOidcIntakeMapping#runner_environment}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#workflow GithubOidcIntakeMapping#workflow}

---

##### `workflowRef`<sup>Optional</sup> <a name="workflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflowRef"></a>

```typescript
public readonly workflowRef: string;
```

- *Type:* string

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#workflow_ref GithubOidcIntakeMapping#workflow_ref}

---

### GithubOidcIntakeMappingConfig <a name="GithubOidcIntakeMappingConfig" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.Initializer"></a>

```typescript
import { githubOidcIntakeMapping } from '@cdktn/provider-datadog'

const githubOidcIntakeMappingConfig: githubOidcIntakeMapping.GithubOidcIntakeMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.claimMatchers">claimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `claimMatchers`<sup>Optional</sup> <a name="claimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.claimMatchers"></a>

```typescript
public readonly claimMatchers: GithubOidcIntakeMappingClaimMatchers;
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#claim_matchers GithubOidcIntakeMapping#claim_matchers}

---

## Classes <a name="Classes" id="Classes"></a>

### GithubOidcIntakeMappingClaimMatchersOutputReference <a name="GithubOidcIntakeMappingClaimMatchersOutputReference" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer"></a>

```typescript
import { githubOidcIntakeMapping } from '@cdktn/provider-datadog'

new githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActor">resetActor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActorId">resetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterprise">resetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterpriseId">resetEnterpriseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEventName">resetEventName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetJobWorkflowRef">resetJobWorkflowRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRefType">resetRefType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwner">resetRepositoryOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwnerId">resetRepositoryOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryVisibility">resetRepositoryVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRunnerEnvironment">resetRunnerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflow">resetWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflowRef">resetWorkflowRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActor` <a name="resetActor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActor"></a>

```typescript
public resetActor(): void
```

##### `resetActorId` <a name="resetActorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActorId"></a>

```typescript
public resetActorId(): void
```

##### `resetEnterprise` <a name="resetEnterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterprise"></a>

```typescript
public resetEnterprise(): void
```

##### `resetEnterpriseId` <a name="resetEnterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterpriseId"></a>

```typescript
public resetEnterpriseId(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetEventName` <a name="resetEventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEventName"></a>

```typescript
public resetEventName(): void
```

##### `resetJobWorkflowRef` <a name="resetJobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetJobWorkflowRef"></a>

```typescript
public resetJobWorkflowRef(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetRefType` <a name="resetRefType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRefType"></a>

```typescript
public resetRefType(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetRepositoryId` <a name="resetRepositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryId"></a>

```typescript
public resetRepositoryId(): void
```

##### `resetRepositoryOwner` <a name="resetRepositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwner"></a>

```typescript
public resetRepositoryOwner(): void
```

##### `resetRepositoryOwnerId` <a name="resetRepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwnerId"></a>

```typescript
public resetRepositoryOwnerId(): void
```

##### `resetRepositoryVisibility` <a name="resetRepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryVisibility"></a>

```typescript
public resetRepositoryVisibility(): void
```

##### `resetRunnerEnvironment` <a name="resetRunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRunnerEnvironment"></a>

```typescript
public resetRunnerEnvironment(): void
```

##### `resetWorkflow` <a name="resetWorkflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflow"></a>

```typescript
public resetWorkflow(): void
```

##### `resetWorkflowRef` <a name="resetWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflowRef"></a>

```typescript
public resetWorkflowRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorIdInput">actorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorInput">actorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseIdInput">enterpriseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseInput">enterpriseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventNameInput">eventNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRefInput">jobWorkflowRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refTypeInput">refTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput">repositoryOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerInput">repositoryOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibilityInput">repositoryVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironmentInput">runnerEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.subInput">subInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowInput">workflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRefInput">workflowRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actor">actor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterprise">enterprise</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseId">enterpriseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventName">eventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRef">jobWorkflowRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refType">refType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwner">repositoryOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerId">repositoryOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibility">repositoryVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironment">runnerEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.sub">sub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflow">workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRef">workflowRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: string;
```

- *Type:* string

---

##### `actorInput`<sup>Optional</sup> <a name="actorInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorInput"></a>

```typescript
public readonly actorInput: string;
```

- *Type:* string

---

##### `enterpriseIdInput`<sup>Optional</sup> <a name="enterpriseIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseIdInput"></a>

```typescript
public readonly enterpriseIdInput: string;
```

- *Type:* string

---

##### `enterpriseInput`<sup>Optional</sup> <a name="enterpriseInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseInput"></a>

```typescript
public readonly enterpriseInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `eventNameInput`<sup>Optional</sup> <a name="eventNameInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventNameInput"></a>

```typescript
public readonly eventNameInput: string;
```

- *Type:* string

---

##### `jobWorkflowRefInput`<sup>Optional</sup> <a name="jobWorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRefInput"></a>

```typescript
public readonly jobWorkflowRefInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `refTypeInput`<sup>Optional</sup> <a name="refTypeInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refTypeInput"></a>

```typescript
public readonly refTypeInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `repositoryOwnerIdInput`<sup>Optional</sup> <a name="repositoryOwnerIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput"></a>

```typescript
public readonly repositoryOwnerIdInput: string;
```

- *Type:* string

---

##### `repositoryOwnerInput`<sup>Optional</sup> <a name="repositoryOwnerInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerInput"></a>

```typescript
public readonly repositoryOwnerInput: string;
```

- *Type:* string

---

##### `repositoryVisibilityInput`<sup>Optional</sup> <a name="repositoryVisibilityInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibilityInput"></a>

```typescript
public readonly repositoryVisibilityInput: string;
```

- *Type:* string

---

##### `runnerEnvironmentInput`<sup>Optional</sup> <a name="runnerEnvironmentInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironmentInput"></a>

```typescript
public readonly runnerEnvironmentInput: string;
```

- *Type:* string

---

##### `subInput`<sup>Optional</sup> <a name="subInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.subInput"></a>

```typescript
public readonly subInput: string;
```

- *Type:* string

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowInput"></a>

```typescript
public readonly workflowInput: string;
```

- *Type:* string

---

##### `workflowRefInput`<sup>Optional</sup> <a name="workflowRefInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRefInput"></a>

```typescript
public readonly workflowRefInput: string;
```

- *Type:* string

---

##### `actor`<sup>Required</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actor"></a>

```typescript
public readonly actor: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterprise"></a>

```typescript
public readonly enterprise: string;
```

- *Type:* string

---

##### `enterpriseId`<sup>Required</sup> <a name="enterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseId"></a>

```typescript
public readonly enterpriseId: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventName"></a>

```typescript
public readonly eventName: string;
```

- *Type:* string

---

##### `jobWorkflowRef`<sup>Required</sup> <a name="jobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRef"></a>

```typescript
public readonly jobWorkflowRef: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `refType`<sup>Required</sup> <a name="refType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refType"></a>

```typescript
public readonly refType: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `repositoryOwner`<sup>Required</sup> <a name="repositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwner"></a>

```typescript
public readonly repositoryOwner: string;
```

- *Type:* string

---

##### `repositoryOwnerId`<sup>Required</sup> <a name="repositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerId"></a>

```typescript
public readonly repositoryOwnerId: string;
```

- *Type:* string

---

##### `repositoryVisibility`<sup>Required</sup> <a name="repositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibility"></a>

```typescript
public readonly repositoryVisibility: string;
```

- *Type:* string

---

##### `runnerEnvironment`<sup>Required</sup> <a name="runnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironment"></a>

```typescript
public readonly runnerEnvironment: string;
```

- *Type:* string

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.sub"></a>

```typescript
public readonly sub: string;
```

- *Type:* string

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

---

##### `workflowRef`<sup>Required</sup> <a name="workflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRef"></a>

```typescript
public readonly workflowRef: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GithubOidcIntakeMappingClaimMatchers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

---



