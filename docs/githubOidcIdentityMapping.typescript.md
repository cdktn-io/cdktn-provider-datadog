# `githubOidcIdentityMapping` Submodule <a name="`githubOidcIdentityMapping` Submodule" id="@cdktn/provider-datadog.githubOidcIdentityMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubOidcIdentityMapping <a name="GithubOidcIdentityMapping" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping datadog_github_oidc_identity_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer"></a>

```typescript
import { githubOidcIdentityMapping } from '@cdktn/provider-datadog'

new githubOidcIdentityMapping.GithubOidcIdentityMapping(scope: Construct, id: string, config: GithubOidcIdentityMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig">GithubOidcIdentityMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig">GithubOidcIdentityMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers">putClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers">resetClaimMatchers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClaimMatchers` <a name="putClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers"></a>

```typescript
public putClaimMatchers(value: GithubOidcIdentityMappingClaimMatchers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---

##### `resetClaimMatchers` <a name="resetClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers"></a>

```typescript
public resetClaimMatchers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct"></a>

```typescript
import { githubOidcIdentityMapping } from '@cdktn/provider-datadog'

githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement"></a>

```typescript
import { githubOidcIdentityMapping } from '@cdktn/provider-datadog'

githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource"></a>

```typescript
import { githubOidcIdentityMapping } from '@cdktn/provider-datadog'

githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport"></a>

```typescript
import { githubOidcIdentityMapping } from '@cdktn/provider-datadog'

githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubOidcIdentityMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubOidcIdentityMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GithubOidcIdentityMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid">accountUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers">claimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput">accountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput">claimMatchersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier">accountIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountUuid`<sup>Required</sup> <a name="accountUuid" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid"></a>

```typescript
public readonly accountUuid: string;
```

- *Type:* string

---

##### `claimMatchers`<sup>Required</sup> <a name="claimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers"></a>

```typescript
public readonly claimMatchers: GithubOidcIdentityMappingClaimMatchersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdentifierInput`<sup>Optional</sup> <a name="accountIdentifierInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput"></a>

```typescript
public readonly accountIdentifierInput: string;
```

- *Type:* string

---

##### `claimMatchersInput`<sup>Optional</sup> <a name="claimMatchersInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput"></a>

```typescript
public readonly claimMatchersInput: IResolvable | GithubOidcIdentityMappingClaimMatchers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier"></a>

```typescript
public readonly accountIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubOidcIdentityMappingClaimMatchers <a name="GithubOidcIdentityMappingClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.Initializer"></a>

```typescript
import { githubOidcIdentityMapping } from '@cdktn/provider-datadog'

const githubOidcIdentityMappingClaimMatchers: githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub">sub</a></code> | <code>string</code> | Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor">actor</a></code> | <code>string</code> | Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId">actorId</a></code> | <code>string</code> | Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise">enterprise</a></code> | <code>string</code> | Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId">enterpriseId</a></code> | <code>string</code> | Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment">environment</a></code> | <code>string</code> | Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName">eventName</a></code> | <code>string</code> | Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef">jobWorkflowRef</a></code> | <code>string</code> | Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref">ref</a></code> | <code>string</code> | Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType">refType</a></code> | <code>string</code> | Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository">repository</a></code> | <code>string</code> | Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId">repositoryId</a></code> | <code>string</code> | Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner">repositoryOwner</a></code> | <code>string</code> | Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId">repositoryOwnerId</a></code> | <code>string</code> | Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility">repositoryVisibility</a></code> | <code>string</code> | Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment">runnerEnvironment</a></code> | <code>string</code> | Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow">workflow</a></code> | <code>string</code> | Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef">workflowRef</a></code> | <code>string</code> | Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. |

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub"></a>

```typescript
public readonly sub: string;
```

- *Type:* string

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#sub GithubOidcIdentityMapping#sub}

---

##### `actor`<sup>Optional</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor"></a>

```typescript
public readonly actor: string;
```

- *Type:* string

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor GithubOidcIdentityMapping#actor}

---

##### `actorId`<sup>Optional</sup> <a name="actorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor_id GithubOidcIdentityMapping#actor_id}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise"></a>

```typescript
public readonly enterprise: string;
```

- *Type:* string

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise GithubOidcIdentityMapping#enterprise}

---

##### `enterpriseId`<sup>Optional</sup> <a name="enterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId"></a>

```typescript
public readonly enterpriseId: string;
```

- *Type:* string

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise_id GithubOidcIdentityMapping#enterprise_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#environment GithubOidcIdentityMapping#environment}

---

##### `eventName`<sup>Optional</sup> <a name="eventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName"></a>

```typescript
public readonly eventName: string;
```

- *Type:* string

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#event_name GithubOidcIdentityMapping#event_name}

---

##### `jobWorkflowRef`<sup>Optional</sup> <a name="jobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef"></a>

```typescript
public readonly jobWorkflowRef: string;
```

- *Type:* string

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#job_workflow_ref GithubOidcIdentityMapping#job_workflow_ref}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref GithubOidcIdentityMapping#ref}

---

##### `refType`<sup>Optional</sup> <a name="refType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType"></a>

```typescript
public readonly refType: string;
```

- *Type:* string

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref_type GithubOidcIdentityMapping#ref_type}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository GithubOidcIdentityMapping#repository}

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_id GithubOidcIdentityMapping#repository_id}

---

##### `repositoryOwner`<sup>Optional</sup> <a name="repositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner"></a>

```typescript
public readonly repositoryOwner: string;
```

- *Type:* string

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner GithubOidcIdentityMapping#repository_owner}

---

##### `repositoryOwnerId`<sup>Optional</sup> <a name="repositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId"></a>

```typescript
public readonly repositoryOwnerId: string;
```

- *Type:* string

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner_id GithubOidcIdentityMapping#repository_owner_id}

---

##### `repositoryVisibility`<sup>Optional</sup> <a name="repositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility"></a>

```typescript
public readonly repositoryVisibility: string;
```

- *Type:* string

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_visibility GithubOidcIdentityMapping#repository_visibility}

---

##### `runnerEnvironment`<sup>Optional</sup> <a name="runnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment"></a>

```typescript
public readonly runnerEnvironment: string;
```

- *Type:* string

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#runner_environment GithubOidcIdentityMapping#runner_environment}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow GithubOidcIdentityMapping#workflow}

---

##### `workflowRef`<sup>Optional</sup> <a name="workflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef"></a>

```typescript
public readonly workflowRef: string;
```

- *Type:* string

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow_ref GithubOidcIdentityMapping#workflow_ref}

---

### GithubOidcIdentityMappingConfig <a name="GithubOidcIdentityMappingConfig" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.Initializer"></a>

```typescript
import { githubOidcIdentityMapping } from '@cdktn/provider-datadog'

const githubOidcIdentityMappingConfig: githubOidcIdentityMapping.GithubOidcIdentityMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier">accountIdentifier</a></code> | <code>string</code> | The email or handle of the Datadog user or service account that the GitHub workload authenticates as. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers">claimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier"></a>

```typescript
public readonly accountIdentifier: string;
```

- *Type:* string

The email or handle of the Datadog user or service account that the GitHub workload authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#account_identifier GithubOidcIdentityMapping#account_identifier}

---

##### `claimMatchers`<sup>Optional</sup> <a name="claimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers"></a>

```typescript
public readonly claimMatchers: GithubOidcIdentityMappingClaimMatchers;
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#claim_matchers GithubOidcIdentityMapping#claim_matchers}

---

## Classes <a name="Classes" id="Classes"></a>

### GithubOidcIdentityMappingClaimMatchersOutputReference <a name="GithubOidcIdentityMappingClaimMatchersOutputReference" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer"></a>

```typescript
import { githubOidcIdentityMapping } from '@cdktn/provider-datadog'

new githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor">resetActor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId">resetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise">resetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId">resetEnterpriseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName">resetEventName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef">resetJobWorkflowRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType">resetRefType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner">resetRepositoryOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId">resetRepositoryOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility">resetRepositoryVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment">resetRunnerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow">resetWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef">resetWorkflowRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActor` <a name="resetActor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor"></a>

```typescript
public resetActor(): void
```

##### `resetActorId` <a name="resetActorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId"></a>

```typescript
public resetActorId(): void
```

##### `resetEnterprise` <a name="resetEnterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise"></a>

```typescript
public resetEnterprise(): void
```

##### `resetEnterpriseId` <a name="resetEnterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId"></a>

```typescript
public resetEnterpriseId(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetEventName` <a name="resetEventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName"></a>

```typescript
public resetEventName(): void
```

##### `resetJobWorkflowRef` <a name="resetJobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef"></a>

```typescript
public resetJobWorkflowRef(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetRefType` <a name="resetRefType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType"></a>

```typescript
public resetRefType(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetRepositoryId` <a name="resetRepositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId"></a>

```typescript
public resetRepositoryId(): void
```

##### `resetRepositoryOwner` <a name="resetRepositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner"></a>

```typescript
public resetRepositoryOwner(): void
```

##### `resetRepositoryOwnerId` <a name="resetRepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId"></a>

```typescript
public resetRepositoryOwnerId(): void
```

##### `resetRepositoryVisibility` <a name="resetRepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility"></a>

```typescript
public resetRepositoryVisibility(): void
```

##### `resetRunnerEnvironment` <a name="resetRunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment"></a>

```typescript
public resetRunnerEnvironment(): void
```

##### `resetWorkflow` <a name="resetWorkflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow"></a>

```typescript
public resetWorkflow(): void
```

##### `resetWorkflowRef` <a name="resetWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef"></a>

```typescript
public resetWorkflowRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput">actorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput">actorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput">enterpriseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput">enterpriseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput">eventNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput">jobWorkflowRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput">refTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput">repositoryOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput">repositoryOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput">repositoryVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput">runnerEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput">subInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput">workflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput">workflowRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor">actor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise">enterprise</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId">enterpriseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName">eventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef">jobWorkflowRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType">refType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner">repositoryOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId">repositoryOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility">repositoryVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment">runnerEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub">sub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow">workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef">workflowRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: string;
```

- *Type:* string

---

##### `actorInput`<sup>Optional</sup> <a name="actorInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput"></a>

```typescript
public readonly actorInput: string;
```

- *Type:* string

---

##### `enterpriseIdInput`<sup>Optional</sup> <a name="enterpriseIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput"></a>

```typescript
public readonly enterpriseIdInput: string;
```

- *Type:* string

---

##### `enterpriseInput`<sup>Optional</sup> <a name="enterpriseInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput"></a>

```typescript
public readonly enterpriseInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `eventNameInput`<sup>Optional</sup> <a name="eventNameInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput"></a>

```typescript
public readonly eventNameInput: string;
```

- *Type:* string

---

##### `jobWorkflowRefInput`<sup>Optional</sup> <a name="jobWorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput"></a>

```typescript
public readonly jobWorkflowRefInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `refTypeInput`<sup>Optional</sup> <a name="refTypeInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput"></a>

```typescript
public readonly refTypeInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `repositoryOwnerIdInput`<sup>Optional</sup> <a name="repositoryOwnerIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput"></a>

```typescript
public readonly repositoryOwnerIdInput: string;
```

- *Type:* string

---

##### `repositoryOwnerInput`<sup>Optional</sup> <a name="repositoryOwnerInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput"></a>

```typescript
public readonly repositoryOwnerInput: string;
```

- *Type:* string

---

##### `repositoryVisibilityInput`<sup>Optional</sup> <a name="repositoryVisibilityInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput"></a>

```typescript
public readonly repositoryVisibilityInput: string;
```

- *Type:* string

---

##### `runnerEnvironmentInput`<sup>Optional</sup> <a name="runnerEnvironmentInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput"></a>

```typescript
public readonly runnerEnvironmentInput: string;
```

- *Type:* string

---

##### `subInput`<sup>Optional</sup> <a name="subInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput"></a>

```typescript
public readonly subInput: string;
```

- *Type:* string

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput"></a>

```typescript
public readonly workflowInput: string;
```

- *Type:* string

---

##### `workflowRefInput`<sup>Optional</sup> <a name="workflowRefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput"></a>

```typescript
public readonly workflowRefInput: string;
```

- *Type:* string

---

##### `actor`<sup>Required</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor"></a>

```typescript
public readonly actor: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise"></a>

```typescript
public readonly enterprise: string;
```

- *Type:* string

---

##### `enterpriseId`<sup>Required</sup> <a name="enterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId"></a>

```typescript
public readonly enterpriseId: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName"></a>

```typescript
public readonly eventName: string;
```

- *Type:* string

---

##### `jobWorkflowRef`<sup>Required</sup> <a name="jobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef"></a>

```typescript
public readonly jobWorkflowRef: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `refType`<sup>Required</sup> <a name="refType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType"></a>

```typescript
public readonly refType: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `repositoryOwner`<sup>Required</sup> <a name="repositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner"></a>

```typescript
public readonly repositoryOwner: string;
```

- *Type:* string

---

##### `repositoryOwnerId`<sup>Required</sup> <a name="repositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId"></a>

```typescript
public readonly repositoryOwnerId: string;
```

- *Type:* string

---

##### `repositoryVisibility`<sup>Required</sup> <a name="repositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility"></a>

```typescript
public readonly repositoryVisibility: string;
```

- *Type:* string

---

##### `runnerEnvironment`<sup>Required</sup> <a name="runnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment"></a>

```typescript
public readonly runnerEnvironment: string;
```

- *Type:* string

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub"></a>

```typescript
public readonly sub: string;
```

- *Type:* string

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

---

##### `workflowRef`<sup>Required</sup> <a name="workflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef"></a>

```typescript
public readonly workflowRef: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GithubOidcIdentityMappingClaimMatchers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---



