# `integrationMsTeamsTenantBasedHandle` Submodule <a name="`integrationMsTeamsTenantBasedHandle` Submodule" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMsTeamsTenantBasedHandle <a name="IntegrationMsTeamsTenantBasedHandle" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_ms_teams_tenant_based_handle datadog_integration_ms_teams_tenant_based_handle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer"></a>

```typescript
import { integrationMsTeamsTenantBasedHandle } from '@cdktn/provider-datadog'

new integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle(scope: Construct, id: string, config: IntegrationMsTeamsTenantBasedHandleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig">IntegrationMsTeamsTenantBasedHandleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig">IntegrationMsTeamsTenantBasedHandleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationMsTeamsTenantBasedHandle resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct"></a>

```typescript
import { integrationMsTeamsTenantBasedHandle } from '@cdktn/provider-datadog'

integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement"></a>

```typescript
import { integrationMsTeamsTenantBasedHandle } from '@cdktn/provider-datadog'

integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource"></a>

```typescript
import { integrationMsTeamsTenantBasedHandle } from '@cdktn/provider-datadog'

integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport"></a>

```typescript
import { integrationMsTeamsTenantBasedHandle } from '@cdktn/provider-datadog'

integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntegrationMsTeamsTenantBasedHandle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationMsTeamsTenantBasedHandle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationMsTeamsTenantBasedHandle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_ms_teams_tenant_based_handle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationMsTeamsTenantBasedHandle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamNameInput">teamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantNameInput">tenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamName">teamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantName">tenantName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `teamNameInput`<sup>Optional</sup> <a name="teamNameInput" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamNameInput"></a>

```typescript
public readonly teamNameInput: string;
```

- *Type:* string

---

##### `tenantNameInput`<sup>Optional</sup> <a name="tenantNameInput" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantNameInput"></a>

```typescript
public readonly tenantNameInput: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMsTeamsTenantBasedHandleConfig <a name="IntegrationMsTeamsTenantBasedHandleConfig" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.Initializer"></a>

```typescript
import { integrationMsTeamsTenantBasedHandle } from '@cdktn/provider-datadog'

const integrationMsTeamsTenantBasedHandleConfig: integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.channelName">channelName</a></code> | <code>string</code> | Your channel name. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.name">name</a></code> | <code>string</code> | Your tenant-based handle name. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.teamName">teamName</a></code> | <code>string</code> | Your team name. |
| <code><a href="#@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.tenantName">tenantName</a></code> | <code>string</code> | Your tenant name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Your channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_ms_teams_tenant_based_handle#channel_name IntegrationMsTeamsTenantBasedHandle#channel_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Your tenant-based handle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_ms_teams_tenant_based_handle#name IntegrationMsTeamsTenantBasedHandle#name}

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

Your team name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_ms_teams_tenant_based_handle#team_name IntegrationMsTeamsTenantBasedHandle#team_name}

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktn/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

Your tenant name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_ms_teams_tenant_based_handle#tenant_name IntegrationMsTeamsTenantBasedHandle#tenant_name}

---



