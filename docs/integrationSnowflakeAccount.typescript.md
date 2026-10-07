# `integrationSnowflakeAccount` Submodule <a name="`integrationSnowflakeAccount` Submodule" id="@cdktn/provider-datadog.integrationSnowflakeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSnowflakeAccount <a name="IntegrationSnowflakeAccount" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account datadog_integration_snowflake_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccount(scope: Construct, id: string, config: IntegrationSnowflakeAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig">IntegrationSnowflakeAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig">IntegrationSnowflakeAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows">putDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetDataflows">resetDataflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication"></a>

```typescript
public putAuthentication(value: IntegrationSnowflakeAccountAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---

##### `putDataflows` <a name="putDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows"></a>

```typescript
public putDataflows(value: IntegrationSnowflakeAccountDataflows): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---

##### `resetDataflows` <a name="resetDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetDataflows"></a>

```typescript
public resetDataflows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationSnowflakeAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationSnowflakeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationSnowflakeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference">IntegrationSnowflakeAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference">IntegrationSnowflakeAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference">IntegrationSnowflakeAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authenticationInput">authenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflowsInput">dataflowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authentication"></a>

```typescript
public readonly authentication: IntegrationSnowflakeAccountAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference">IntegrationSnowflakeAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflows"></a>

```typescript
public readonly dataflows: IntegrationSnowflakeAccountDataflowsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference">IntegrationSnowflakeAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference">IntegrationSnowflakeAccountSettingsOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | IntegrationSnowflakeAccountAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---

##### `dataflowsInput`<sup>Optional</sup> <a name="dataflowsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflowsInput"></a>

```typescript
public readonly dataflowsInput: IResolvable | IntegrationSnowflakeAccountDataflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSnowflakeAccountAuthentication <a name="IntegrationSnowflakeAccountAuthentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountAuthentication: integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.property.snowflakeIntegrationAccountPrivateKeyAuth">snowflakeIntegrationAccountPrivateKeyAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | The RSA key pair authentication method configured on the account. |

---

##### `snowflakeIntegrationAccountPrivateKeyAuth`<sup>Optional</sup> <a name="snowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.property.snowflakeIntegrationAccountPrivateKeyAuth"></a>

```typescript
public readonly snowflakeIntegrationAccountPrivateKeyAuth: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

The RSA key pair authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_integration_account_private_key_auth IntegrationSnowflakeAccount#snowflake_integration_account_private_key_auth}

---

### IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth <a name="IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth: integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyName">privateKeyName</a></code> | <code>string</code> | Name that distinguishes this private key from other keys in Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWo">privateKeyWo</a></code> | <code>string</code> | The private key, in PEM format. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWoVersion">privateKeyWoVersion</a></code> | <code>string</code> | Version trigger for private_key_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.authType">authType</a></code> | <code>string</code> | The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWo">privateKeyPassphraseWo</a></code> | <code>string</code> | Passphrase that decrypts the private key. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWoVersion">privateKeyPassphraseWoVersion</a></code> | <code>string</code> | Version trigger for private_key_passphrase_wo rotation. String length must be at least 1. |

---

##### `privateKeyName`<sup>Required</sup> <a name="privateKeyName" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyName"></a>

```typescript
public readonly privateKeyName: string;
```

- *Type:* string

Name that distinguishes this private key from other keys in Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_name IntegrationSnowflakeAccount#private_key_name}

---

##### `privateKeyWo`<sup>Required</sup> <a name="privateKeyWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWo"></a>

```typescript
public readonly privateKeyWo: string;
```

- *Type:* string

The private key, in PEM format. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo IntegrationSnowflakeAccount#private_key_wo}

---

##### `privateKeyWoVersion`<sup>Required</sup> <a name="privateKeyWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWoVersion"></a>

```typescript
public readonly privateKeyWoVersion: string;
```

- *Type:* string

Version trigger for private_key_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo_version IntegrationSnowflakeAccount#private_key_wo_version}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#auth_type IntegrationSnowflakeAccount#auth_type}

---

##### `privateKeyPassphraseWo`<sup>Optional</sup> <a name="privateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWo"></a>

```typescript
public readonly privateKeyPassphraseWo: string;
```

- *Type:* string

Passphrase that decrypts the private key.

Provide it only when the key is encrypted. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo IntegrationSnowflakeAccount#private_key_passphrase_wo}

---

##### `privateKeyPassphraseWoVersion`<sup>Optional</sup> <a name="privateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWoVersion"></a>

```typescript
public readonly privateKeyPassphraseWoVersion: string;
```

- *Type:* string

Version trigger for private_key_passphrase_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo_version IntegrationSnowflakeAccount#private_key_passphrase_wo_version}

---

### IntegrationSnowflakeAccountConfig <a name="IntegrationSnowflakeAccountConfig" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountConfig: integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | Authentication configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.name">name</a></code> | <code>string</code> | Human-readable name of the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | Settings configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | Data Datadog collects from Snowflake, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.authentication"></a>

```typescript
public readonly authentication: IntegrationSnowflakeAccountAuthentication;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

Authentication configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#authentication IntegrationSnowflakeAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable name of the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#name IntegrationSnowflakeAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

Settings configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dataflows"></a>

```typescript
public readonly dataflows: IntegrationSnowflakeAccountDataflows;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

Data Datadog collects from Snowflake, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#dataflows IntegrationSnowflakeAccount#dataflows}

---

### IntegrationSnowflakeAccountDataflows <a name="IntegrationSnowflakeAccountDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflows: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeAccountUsageMetrics">snowflakeAccountUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeCloudCostMetrics">snowflakeCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeDataObservabilityQualityMonitoring">snowflakeDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeEventTableLogs">snowflakeEventTableLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | Records from your Snowflake event tables, used to monitor application behavior and identify issues. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeOrganizationUsageMetrics">snowflakeOrganizationUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeQueryHistoryLogs">snowflakeQueryHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | Per-query logs that let you identify long-running, poorly performing, and expensive queries. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeSecurityLogs">snowflakeSecurityLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/). |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeTaskHistoryLogs">snowflakeTaskHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message. |

---

##### `snowflakeAccountUsageMetrics`<sup>Optional</sup> <a name="snowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeAccountUsageMetrics"></a>

```typescript
public readonly snowflakeAccountUsageMetrics: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_usage_metrics IntegrationSnowflakeAccount#snowflake_account_usage_metrics}

---

##### `snowflakeCloudCostMetrics`<sup>Optional</sup> <a name="snowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeCloudCostMetrics"></a>

```typescript
public readonly snowflakeCloudCostMetrics: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema.

Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization, and the ORGANIZATION_BILLING_VIEWER database role on the Snowflake role; without both this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_cloud_cost_metrics IntegrationSnowflakeAccount#snowflake_cloud_cost_metrics}

---

##### `snowflakeDataObservabilityQualityMonitoring`<sup>Optional</sup> <a name="snowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeDataObservabilityQualityMonitoring"></a>

```typescript
public readonly snowflakeDataObservabilityQualityMonitoring: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_data_observability_quality_monitoring IntegrationSnowflakeAccount#snowflake_data_observability_quality_monitoring}

---

##### `snowflakeEventTableLogs`<sup>Optional</sup> <a name="snowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeEventTableLogs"></a>

```typescript
public readonly snowflakeEventTableLogs: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

Records from your Snowflake event tables, used to monitor application behavior and identify issues.

`enabled` turns the dataflow on and off as a whole, and the per-record-type toggles in `settings` select which kinds of record it collects while it is on. The Snowflake role needs usage granted on the database, the schema, and the event table itself; without those grants this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_event_table_logs IntegrationSnowflakeAccount#snowflake_event_table_logs}

---

##### `snowflakeOrganizationUsageMetrics`<sup>Optional</sup> <a name="snowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeOrganizationUsageMetrics"></a>

```typescript
public readonly snowflakeOrganizationUsageMetrics: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake.

Reading that schema requires the ORGADMIN role; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_organization_usage_metrics IntegrationSnowflakeAccount#snowflake_organization_usage_metrics}

---

##### `snowflakeQueryHistoryLogs`<sup>Optional</sup> <a name="snowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeQueryHistoryLogs"></a>

```typescript
public readonly snowflakeQueryHistoryLogs: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

Per-query logs that let you identify long-running, poorly performing, and expensive queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_query_history_logs IntegrationSnowflakeAccount#snowflake_query_history_logs}

---

##### `snowflakeSecurityLogs`<sup>Optional</sup> <a name="snowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeSecurityLogs"></a>

```typescript
public readonly snowflakeSecurityLogs: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_security_logs IntegrationSnowflakeAccount#snowflake_security_logs}

---

##### `snowflakeTaskHistoryLogs`<sup>Optional</sup> <a name="snowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeTaskHistoryLogs"></a>

```typescript
public readonly snowflakeTaskHistoryLogs: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_task_history_logs IntegrationSnowflakeAccount#snowflake_task_history_logs}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | Settings of the account usage metrics dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

Settings of the account usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.property.accountUsageMetricsAggregateLast24H">accountUsageMetricsAggregateLast24H</a></code> | <code>boolean \| cdktn.IResolvable</code> | The period each metric aggregates over. |

---

##### `accountUsageMetricsAggregateLast24H`<sup>Optional</sup> <a name="accountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.property.accountUsageMetricsAggregateLast24H"></a>

```typescript
public readonly accountUsageMetricsAggregateLast24H: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#account_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#account_usage_metrics_aggregate_last_24h}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | Settings of the Cloud Cost Management dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.property.queryTags">queryTags</a></code> | <code>string</code> | Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management. |

---

##### `queryTags`<sup>Optional</sup> <a name="queryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.property.queryTags"></a>

```typescript
public readonly queryTags: string;
```

- *Type:* string

Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_tags IntegrationSnowflakeAccount#query_tags}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | Settings of the Data Observability dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.doTableCrawlerCron">doTableCrawlerCron</a></code> | <code>string</code> | Cron expression setting how often Datadog crawls your Snowflake table metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.syncSnowflakeSystemDatabase">syncSnowflakeSystemDatabase</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases. |

---

##### `doTableCrawlerCron`<sup>Optional</sup> <a name="doTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.doTableCrawlerCron"></a>

```typescript
public readonly doTableCrawlerCron: string;
```

- *Type:* string

Cron expression setting how often Datadog crawls your Snowflake table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#do_table_crawler_cron IntegrationSnowflakeAccount#do_table_crawler_cron}

---

##### `syncSnowflakeSystemDatabase`<sup>Optional</sup> <a name="syncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.syncSnowflakeSystemDatabase"></a>

```typescript
public readonly syncSnowflakeSystemDatabase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#sync_snowflake_system_database IntegrationSnowflakeAccount#sync_snowflake_system_database}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeEventTableLogs: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | Settings of the event table dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

Settings of the event table dataflow.

Each record type is collected independently so that you can control ingestion costs, and every record type is ingested into Datadog as logs tagged with its `record_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableEventsEnabled">eventTableEventsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether records with a `record_type` of `event` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsEnabled">eventTableLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether records with a `record_type` of `log` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsIntervalMin">eventTableLogsIntervalMin</a></code> | <code>number</code> | How often event table records are collected, in minutes. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpanEventsEnabled">eventTableSpanEventsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether records with a `record_type` of `span_event` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpansEnabled">eventTableSpansEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether records with a `record_type` of `span` are collected. |

---

##### `eventTableEventsEnabled`<sup>Optional</sup> <a name="eventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableEventsEnabled"></a>

```typescript
public readonly eventTableEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether records with a `record_type` of `event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_events_enabled IntegrationSnowflakeAccount#event_table_events_enabled}

---

##### `eventTableLogsEnabled`<sup>Optional</sup> <a name="eventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsEnabled"></a>

```typescript
public readonly eventTableLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether records with a `record_type` of `log` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_enabled IntegrationSnowflakeAccount#event_table_logs_enabled}

---

##### `eventTableLogsIntervalMin`<sup>Optional</sup> <a name="eventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsIntervalMin"></a>

```typescript
public readonly eventTableLogsIntervalMin: number;
```

- *Type:* number

How often event table records are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_interval_min IntegrationSnowflakeAccount#event_table_logs_interval_min}

---

##### `eventTableSpanEventsEnabled`<sup>Optional</sup> <a name="eventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpanEventsEnabled"></a>

```typescript
public readonly eventTableSpanEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether records with a `record_type` of `span_event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_span_events_enabled IntegrationSnowflakeAccount#event_table_span_events_enabled}

---

##### `eventTableSpansEnabled`<sup>Optional</sup> <a name="eventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpansEnabled"></a>

```typescript
public readonly eventTableSpansEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether records with a `record_type` of `span` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_spans_enabled IntegrationSnowflakeAccount#event_table_spans_enabled}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | Settings of the organization usage metrics dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

Settings of the organization usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.property.organizationUsageMetricsAggregateLast24H">organizationUsageMetricsAggregateLast24H</a></code> | <code>boolean \| cdktn.IResolvable</code> | The period each metric aggregates over. |

---

##### `organizationUsageMetricsAggregateLast24H`<sup>Optional</sup> <a name="organizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.property.organizationUsageMetricsAggregateLast24H"></a>

```typescript
public readonly organizationUsageMetricsAggregateLast24H: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#organization_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#organization_usage_metrics_aggregate_last_24h}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | Settings of the query history logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

Settings of the query history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.joinQueryHistoryWithAccessHistoryEnabled">joinQueryHistoryWithAccessHistoryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.queryHistoryLogsIntervalMin">queryHistoryLogsIntervalMin</a></code> | <code>number</code> | How often query history logs are collected, in minutes. |

---

##### `joinQueryHistoryWithAccessHistoryEnabled`<sup>Optional</sup> <a name="joinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.joinQueryHistoryWithAccessHistoryEnabled"></a>

```typescript
public readonly joinQueryHistoryWithAccessHistoryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#join_query_history_with_access_history_enabled IntegrationSnowflakeAccount#join_query_history_with_access_history_enabled}

---

##### `queryHistoryLogsIntervalMin`<sup>Optional</sup> <a name="queryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.queryHistoryLogsIntervalMin"></a>

```typescript
public readonly queryHistoryLogsIntervalMin: number;
```

- *Type:* number

How often query history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_history_logs_interval_min IntegrationSnowflakeAccount#query_history_logs_interval_min}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeSecurityLogs: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | Settings of the security logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

Settings of the security logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.property.securityLogsIntervalMin">securityLogsIntervalMin</a></code> | <code>number</code> | How often security logs are collected, in minutes. |

---

##### `securityLogsIntervalMin`<sup>Optional</sup> <a name="securityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.property.securityLogsIntervalMin"></a>

```typescript
public readonly securityLogsIntervalMin: number;
```

- *Type:* number

How often security logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#security_logs_interval_min IntegrationSnowflakeAccount#security_logs_interval_min}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | Settings of the task history logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

Settings of the task history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.property.taskHistoryLogsIntervalMin">taskHistoryLogsIntervalMin</a></code> | <code>number</code> | How often task history logs are collected, in minutes. |

---

##### `taskHistoryLogsIntervalMin`<sup>Optional</sup> <a name="taskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.property.taskHistoryLogsIntervalMin"></a>

```typescript
public readonly taskHistoryLogsIntervalMin: number;
```

- *Type:* number

How often task history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#task_history_logs_interval_min IntegrationSnowflakeAccount#task_history_logs_interval_min}

---

### IntegrationSnowflakeAccountSettings <a name="IntegrationSnowflakeAccountSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

const integrationSnowflakeAccountSettings: integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.snowflakeAccountIdentifier">snowflakeAccountIdentifier</a></code> | <code>string</code> | Identifier of the Snowflake account being monitored. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.username">username</a></code> | <code>string</code> | Snowflake user Datadog authenticates as. |

---

##### `snowflakeAccountIdentifier`<sup>Required</sup> <a name="snowflakeAccountIdentifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.snowflakeAccountIdentifier"></a>

```typescript
public readonly snowflakeAccountIdentifier: string;
```

- *Type:* string

Identifier of the Snowflake account being monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_identifier IntegrationSnowflakeAccount#snowflake_account_identifier}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Snowflake user Datadog authenticates as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#username IntegrationSnowflakeAccount#username}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSnowflakeAccountAuthenticationOutputReference <a name="IntegrationSnowflakeAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth">putSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resetSnowflakeIntegrationAccountPrivateKeyAuth">resetSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSnowflakeIntegrationAccountPrivateKeyAuth` <a name="putSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth"></a>

```typescript
public putSnowflakeIntegrationAccountPrivateKeyAuth(value: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---

##### `resetSnowflakeIntegrationAccountPrivateKeyAuth` <a name="resetSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resetSnowflakeIntegrationAccountPrivateKeyAuth"></a>

```typescript
public resetSnowflakeIntegrationAccountPrivateKeyAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuth">snowflakeIntegrationAccountPrivateKeyAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuthInput">snowflakeIntegrationAccountPrivateKeyAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snowflakeIntegrationAccountPrivateKeyAuth`<sup>Required</sup> <a name="snowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuth"></a>

```typescript
public readonly snowflakeIntegrationAccountPrivateKeyAuth: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference</a>

---

##### `snowflakeIntegrationAccountPrivateKeyAuthInput`<sup>Optional</sup> <a name="snowflakeIntegrationAccountPrivateKeyAuthInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuthInput"></a>

```typescript
public readonly snowflakeIntegrationAccountPrivateKeyAuthInput: IResolvable | IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---


### IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference <a name="IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWo">resetPrivateKeyPassphraseWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWoVersion">resetPrivateKeyPassphraseWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetPrivateKeyPassphraseWo` <a name="resetPrivateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWo"></a>

```typescript
public resetPrivateKeyPassphraseWo(): void
```

##### `resetPrivateKeyPassphraseWoVersion` <a name="resetPrivateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWoVersion"></a>

```typescript
public resetPrivateKeyPassphraseWoVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyNameInput">privateKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoInput">privateKeyPassphraseWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersionInput">privateKeyPassphraseWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoInput">privateKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersionInput">privateKeyWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyName">privateKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWo">privateKeyPassphraseWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersion">privateKeyPassphraseWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWo">privateKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersion">privateKeyWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `privateKeyNameInput`<sup>Optional</sup> <a name="privateKeyNameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyNameInput"></a>

```typescript
public readonly privateKeyNameInput: string;
```

- *Type:* string

---

##### `privateKeyPassphraseWoInput`<sup>Optional</sup> <a name="privateKeyPassphraseWoInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoInput"></a>

```typescript
public readonly privateKeyPassphraseWoInput: string;
```

- *Type:* string

---

##### `privateKeyPassphraseWoVersionInput`<sup>Optional</sup> <a name="privateKeyPassphraseWoVersionInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersionInput"></a>

```typescript
public readonly privateKeyPassphraseWoVersionInput: string;
```

- *Type:* string

---

##### `privateKeyWoInput`<sup>Optional</sup> <a name="privateKeyWoInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoInput"></a>

```typescript
public readonly privateKeyWoInput: string;
```

- *Type:* string

---

##### `privateKeyWoVersionInput`<sup>Optional</sup> <a name="privateKeyWoVersionInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersionInput"></a>

```typescript
public readonly privateKeyWoVersionInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `privateKeyName`<sup>Required</sup> <a name="privateKeyName" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyName"></a>

```typescript
public readonly privateKeyName: string;
```

- *Type:* string

---

##### ~~`privateKeyPassphraseWo`~~<sup>Required</sup> <a name="privateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly privateKeyPassphraseWo: string;
```

- *Type:* string

---

##### `privateKeyPassphraseWoVersion`<sup>Required</sup> <a name="privateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersion"></a>

```typescript
public readonly privateKeyPassphraseWoVersion: string;
```

- *Type:* string

---

##### ~~`privateKeyWo`~~<sup>Required</sup> <a name="privateKeyWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly privateKeyWo: string;
```

- *Type:* string

---

##### `privateKeyWoVersion`<sup>Required</sup> <a name="privateKeyWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersion"></a>

```typescript
public readonly privateKeyWoVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---


### IntegrationSnowflakeAccountDataflowsOutputReference <a name="IntegrationSnowflakeAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics">putSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics">putSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring">putSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs">putSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics">putSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs">putSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs">putSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs">putSnowflakeTaskHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeAccountUsageMetrics">resetSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeCloudCostMetrics">resetSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeDataObservabilityQualityMonitoring">resetSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeEventTableLogs">resetSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeOrganizationUsageMetrics">resetSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeQueryHistoryLogs">resetSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeSecurityLogs">resetSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeTaskHistoryLogs">resetSnowflakeTaskHistoryLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSnowflakeAccountUsageMetrics` <a name="putSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics"></a>

```typescript
public putSnowflakeAccountUsageMetrics(value: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---

##### `putSnowflakeCloudCostMetrics` <a name="putSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics"></a>

```typescript
public putSnowflakeCloudCostMetrics(value: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---

##### `putSnowflakeDataObservabilityQualityMonitoring` <a name="putSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring"></a>

```typescript
public putSnowflakeDataObservabilityQualityMonitoring(value: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---

##### `putSnowflakeEventTableLogs` <a name="putSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs"></a>

```typescript
public putSnowflakeEventTableLogs(value: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---

##### `putSnowflakeOrganizationUsageMetrics` <a name="putSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics"></a>

```typescript
public putSnowflakeOrganizationUsageMetrics(value: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---

##### `putSnowflakeQueryHistoryLogs` <a name="putSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs"></a>

```typescript
public putSnowflakeQueryHistoryLogs(value: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---

##### `putSnowflakeSecurityLogs` <a name="putSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs"></a>

```typescript
public putSnowflakeSecurityLogs(value: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---

##### `putSnowflakeTaskHistoryLogs` <a name="putSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs"></a>

```typescript
public putSnowflakeTaskHistoryLogs(value: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---

##### `resetSnowflakeAccountUsageMetrics` <a name="resetSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeAccountUsageMetrics"></a>

```typescript
public resetSnowflakeAccountUsageMetrics(): void
```

##### `resetSnowflakeCloudCostMetrics` <a name="resetSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeCloudCostMetrics"></a>

```typescript
public resetSnowflakeCloudCostMetrics(): void
```

##### `resetSnowflakeDataObservabilityQualityMonitoring` <a name="resetSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeDataObservabilityQualityMonitoring"></a>

```typescript
public resetSnowflakeDataObservabilityQualityMonitoring(): void
```

##### `resetSnowflakeEventTableLogs` <a name="resetSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeEventTableLogs"></a>

```typescript
public resetSnowflakeEventTableLogs(): void
```

##### `resetSnowflakeOrganizationUsageMetrics` <a name="resetSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeOrganizationUsageMetrics"></a>

```typescript
public resetSnowflakeOrganizationUsageMetrics(): void
```

##### `resetSnowflakeQueryHistoryLogs` <a name="resetSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeQueryHistoryLogs"></a>

```typescript
public resetSnowflakeQueryHistoryLogs(): void
```

##### `resetSnowflakeSecurityLogs` <a name="resetSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeSecurityLogs"></a>

```typescript
public resetSnowflakeSecurityLogs(): void
```

##### `resetSnowflakeTaskHistoryLogs` <a name="resetSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeTaskHistoryLogs"></a>

```typescript
public resetSnowflakeTaskHistoryLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetrics">snowflakeAccountUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetrics">snowflakeCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoring">snowflakeDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogs">snowflakeEventTableLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetrics">snowflakeOrganizationUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogs">snowflakeQueryHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogs">snowflakeSecurityLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogs">snowflakeTaskHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetricsInput">snowflakeAccountUsageMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetricsInput">snowflakeCloudCostMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoringInput">snowflakeDataObservabilityQualityMonitoringInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogsInput">snowflakeEventTableLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetricsInput">snowflakeOrganizationUsageMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogsInput">snowflakeQueryHistoryLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogsInput">snowflakeSecurityLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogsInput">snowflakeTaskHistoryLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snowflakeAccountUsageMetrics`<sup>Required</sup> <a name="snowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetrics"></a>

```typescript
public readonly snowflakeAccountUsageMetrics: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference</a>

---

##### `snowflakeCloudCostMetrics`<sup>Required</sup> <a name="snowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetrics"></a>

```typescript
public readonly snowflakeCloudCostMetrics: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference</a>

---

##### `snowflakeDataObservabilityQualityMonitoring`<sup>Required</sup> <a name="snowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoring"></a>

```typescript
public readonly snowflakeDataObservabilityQualityMonitoring: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference</a>

---

##### `snowflakeEventTableLogs`<sup>Required</sup> <a name="snowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogs"></a>

```typescript
public readonly snowflakeEventTableLogs: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference</a>

---

##### `snowflakeOrganizationUsageMetrics`<sup>Required</sup> <a name="snowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetrics"></a>

```typescript
public readonly snowflakeOrganizationUsageMetrics: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference</a>

---

##### `snowflakeQueryHistoryLogs`<sup>Required</sup> <a name="snowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogs"></a>

```typescript
public readonly snowflakeQueryHistoryLogs: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference</a>

---

##### `snowflakeSecurityLogs`<sup>Required</sup> <a name="snowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogs"></a>

```typescript
public readonly snowflakeSecurityLogs: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference</a>

---

##### `snowflakeTaskHistoryLogs`<sup>Required</sup> <a name="snowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogs"></a>

```typescript
public readonly snowflakeTaskHistoryLogs: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference</a>

---

##### `snowflakeAccountUsageMetricsInput`<sup>Optional</sup> <a name="snowflakeAccountUsageMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetricsInput"></a>

```typescript
public readonly snowflakeAccountUsageMetricsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---

##### `snowflakeCloudCostMetricsInput`<sup>Optional</sup> <a name="snowflakeCloudCostMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetricsInput"></a>

```typescript
public readonly snowflakeCloudCostMetricsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---

##### `snowflakeDataObservabilityQualityMonitoringInput`<sup>Optional</sup> <a name="snowflakeDataObservabilityQualityMonitoringInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoringInput"></a>

```typescript
public readonly snowflakeDataObservabilityQualityMonitoringInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---

##### `snowflakeEventTableLogsInput`<sup>Optional</sup> <a name="snowflakeEventTableLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogsInput"></a>

```typescript
public readonly snowflakeEventTableLogsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---

##### `snowflakeOrganizationUsageMetricsInput`<sup>Optional</sup> <a name="snowflakeOrganizationUsageMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetricsInput"></a>

```typescript
public readonly snowflakeOrganizationUsageMetricsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---

##### `snowflakeQueryHistoryLogsInput`<sup>Optional</sup> <a name="snowflakeQueryHistoryLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogsInput"></a>

```typescript
public readonly snowflakeQueryHistoryLogsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---

##### `snowflakeSecurityLogsInput`<sup>Optional</sup> <a name="snowflakeSecurityLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogsInput"></a>

```typescript
public readonly snowflakeSecurityLogsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---

##### `snowflakeTaskHistoryLogsInput`<sup>Optional</sup> <a name="snowflakeTaskHistoryLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogsInput"></a>

```typescript
public readonly snowflakeTaskHistoryLogsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resetAccountUsageMetricsAggregateLast24H">resetAccountUsageMetricsAggregateLast24H</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountUsageMetricsAggregateLast24H` <a name="resetAccountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resetAccountUsageMetricsAggregateLast24H"></a>

```typescript
public resetAccountUsageMetricsAggregateLast24H(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24HInput">accountUsageMetricsAggregateLast24HInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24H">accountUsageMetricsAggregateLast24H</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountUsageMetricsAggregateLast24HInput`<sup>Optional</sup> <a name="accountUsageMetricsAggregateLast24HInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24HInput"></a>

```typescript
public readonly accountUsageMetricsAggregateLast24HInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `accountUsageMetricsAggregateLast24H`<sup>Required</sup> <a name="accountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24H"></a>

```typescript
public readonly accountUsageMetricsAggregateLast24H: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resetQueryTags">resetQueryTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryTags` <a name="resetQueryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resetQueryTags"></a>

```typescript
public resetQueryTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTagsInput">queryTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTags">queryTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryTagsInput`<sup>Optional</sup> <a name="queryTagsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTagsInput"></a>

```typescript
public readonly queryTagsInput: string;
```

- *Type:* string

---

##### `queryTags`<sup>Required</sup> <a name="queryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTags"></a>

```typescript
public readonly queryTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetDoTableCrawlerCron">resetDoTableCrawlerCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSnowflakeSystemDatabase">resetSyncSnowflakeSystemDatabase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoTableCrawlerCron` <a name="resetDoTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetDoTableCrawlerCron"></a>

```typescript
public resetDoTableCrawlerCron(): void
```

##### `resetSyncSnowflakeSystemDatabase` <a name="resetSyncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSnowflakeSystemDatabase"></a>

```typescript
public resetSyncSnowflakeSystemDatabase(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCronInput">doTableCrawlerCronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabaseInput">syncSnowflakeSystemDatabaseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCron">doTableCrawlerCron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabase">syncSnowflakeSystemDatabase</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `doTableCrawlerCronInput`<sup>Optional</sup> <a name="doTableCrawlerCronInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCronInput"></a>

```typescript
public readonly doTableCrawlerCronInput: string;
```

- *Type:* string

---

##### `syncSnowflakeSystemDatabaseInput`<sup>Optional</sup> <a name="syncSnowflakeSystemDatabaseInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabaseInput"></a>

```typescript
public readonly syncSnowflakeSystemDatabaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doTableCrawlerCron`<sup>Required</sup> <a name="doTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCron"></a>

```typescript
public readonly doTableCrawlerCron: string;
```

- *Type:* string

---

##### `syncSnowflakeSystemDatabase`<sup>Required</sup> <a name="syncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabase"></a>

```typescript
public readonly syncSnowflakeSystemDatabase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableEventsEnabled">resetEventTableEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsEnabled">resetEventTableLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsIntervalMin">resetEventTableLogsIntervalMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpanEventsEnabled">resetEventTableSpanEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpansEnabled">resetEventTableSpansEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventTableEventsEnabled` <a name="resetEventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableEventsEnabled"></a>

```typescript
public resetEventTableEventsEnabled(): void
```

##### `resetEventTableLogsEnabled` <a name="resetEventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsEnabled"></a>

```typescript
public resetEventTableLogsEnabled(): void
```

##### `resetEventTableLogsIntervalMin` <a name="resetEventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsIntervalMin"></a>

```typescript
public resetEventTableLogsIntervalMin(): void
```

##### `resetEventTableSpanEventsEnabled` <a name="resetEventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpanEventsEnabled"></a>

```typescript
public resetEventTableSpanEventsEnabled(): void
```

##### `resetEventTableSpansEnabled` <a name="resetEventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpansEnabled"></a>

```typescript
public resetEventTableSpansEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabledInput">eventTableEventsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabledInput">eventTableLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMinInput">eventTableLogsIntervalMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabledInput">eventTableSpanEventsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabledInput">eventTableSpansEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabled">eventTableEventsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabled">eventTableLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMin">eventTableLogsIntervalMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabled">eventTableSpanEventsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabled">eventTableSpansEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTableEventsEnabledInput`<sup>Optional</sup> <a name="eventTableEventsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabledInput"></a>

```typescript
public readonly eventTableEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventTableLogsEnabledInput`<sup>Optional</sup> <a name="eventTableLogsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabledInput"></a>

```typescript
public readonly eventTableLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventTableLogsIntervalMinInput`<sup>Optional</sup> <a name="eventTableLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMinInput"></a>

```typescript
public readonly eventTableLogsIntervalMinInput: number;
```

- *Type:* number

---

##### `eventTableSpanEventsEnabledInput`<sup>Optional</sup> <a name="eventTableSpanEventsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabledInput"></a>

```typescript
public readonly eventTableSpanEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventTableSpansEnabledInput`<sup>Optional</sup> <a name="eventTableSpansEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabledInput"></a>

```typescript
public readonly eventTableSpansEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventTableEventsEnabled`<sup>Required</sup> <a name="eventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabled"></a>

```typescript
public readonly eventTableEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventTableLogsEnabled`<sup>Required</sup> <a name="eventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabled"></a>

```typescript
public readonly eventTableLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventTableLogsIntervalMin`<sup>Required</sup> <a name="eventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMin"></a>

```typescript
public readonly eventTableLogsIntervalMin: number;
```

- *Type:* number

---

##### `eventTableSpanEventsEnabled`<sup>Required</sup> <a name="eventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabled"></a>

```typescript
public readonly eventTableSpanEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventTableSpansEnabled`<sup>Required</sup> <a name="eventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabled"></a>

```typescript
public readonly eventTableSpansEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resetOrganizationUsageMetricsAggregateLast24H">resetOrganizationUsageMetricsAggregateLast24H</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrganizationUsageMetricsAggregateLast24H` <a name="resetOrganizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resetOrganizationUsageMetricsAggregateLast24H"></a>

```typescript
public resetOrganizationUsageMetricsAggregateLast24H(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24HInput">organizationUsageMetricsAggregateLast24HInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24H">organizationUsageMetricsAggregateLast24H</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationUsageMetricsAggregateLast24HInput`<sup>Optional</sup> <a name="organizationUsageMetricsAggregateLast24HInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24HInput"></a>

```typescript
public readonly organizationUsageMetricsAggregateLast24HInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `organizationUsageMetricsAggregateLast24H`<sup>Required</sup> <a name="organizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24H"></a>

```typescript
public readonly organizationUsageMetricsAggregateLast24H: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetJoinQueryHistoryWithAccessHistoryEnabled">resetJoinQueryHistoryWithAccessHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetQueryHistoryLogsIntervalMin">resetQueryHistoryLogsIntervalMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJoinQueryHistoryWithAccessHistoryEnabled` <a name="resetJoinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetJoinQueryHistoryWithAccessHistoryEnabled"></a>

```typescript
public resetJoinQueryHistoryWithAccessHistoryEnabled(): void
```

##### `resetQueryHistoryLogsIntervalMin` <a name="resetQueryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetQueryHistoryLogsIntervalMin"></a>

```typescript
public resetQueryHistoryLogsIntervalMin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabledInput">joinQueryHistoryWithAccessHistoryEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMinInput">queryHistoryLogsIntervalMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabled">joinQueryHistoryWithAccessHistoryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMin">queryHistoryLogsIntervalMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `joinQueryHistoryWithAccessHistoryEnabledInput`<sup>Optional</sup> <a name="joinQueryHistoryWithAccessHistoryEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabledInput"></a>

```typescript
public readonly joinQueryHistoryWithAccessHistoryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queryHistoryLogsIntervalMinInput`<sup>Optional</sup> <a name="queryHistoryLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMinInput"></a>

```typescript
public readonly queryHistoryLogsIntervalMinInput: number;
```

- *Type:* number

---

##### `joinQueryHistoryWithAccessHistoryEnabled`<sup>Required</sup> <a name="joinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabled"></a>

```typescript
public readonly joinQueryHistoryWithAccessHistoryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queryHistoryLogsIntervalMin`<sup>Required</sup> <a name="queryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMin"></a>

```typescript
public readonly queryHistoryLogsIntervalMin: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resetSecurityLogsIntervalMin">resetSecurityLogsIntervalMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityLogsIntervalMin` <a name="resetSecurityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resetSecurityLogsIntervalMin"></a>

```typescript
public resetSecurityLogsIntervalMin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMinInput">securityLogsIntervalMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMin">securityLogsIntervalMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityLogsIntervalMinInput`<sup>Optional</sup> <a name="securityLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMinInput"></a>

```typescript
public readonly securityLogsIntervalMinInput: number;
```

- *Type:* number

---

##### `securityLogsIntervalMin`<sup>Required</sup> <a name="securityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMin"></a>

```typescript
public readonly securityLogsIntervalMin: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resetTaskHistoryLogsIntervalMin">resetTaskHistoryLogsIntervalMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTaskHistoryLogsIntervalMin` <a name="resetTaskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resetTaskHistoryLogsIntervalMin"></a>

```typescript
public resetTaskHistoryLogsIntervalMin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMinInput">taskHistoryLogsIntervalMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMin">taskHistoryLogsIntervalMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `taskHistoryLogsIntervalMinInput`<sup>Optional</sup> <a name="taskHistoryLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMinInput"></a>

```typescript
public readonly taskHistoryLogsIntervalMinInput: number;
```

- *Type:* number

---

##### `taskHistoryLogsIntervalMin`<sup>Required</sup> <a name="taskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMin"></a>

```typescript
public readonly taskHistoryLogsIntervalMin: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---


### IntegrationSnowflakeAccountSettingsOutputReference <a name="IntegrationSnowflakeAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer"></a>

```typescript
import { integrationSnowflakeAccount } from '@cdktn/provider-datadog'

new integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifierInput">snowflakeAccountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifier">snowflakeAccountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snowflakeAccountIdentifierInput`<sup>Optional</sup> <a name="snowflakeAccountIdentifierInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifierInput"></a>

```typescript
public readonly snowflakeAccountIdentifierInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `snowflakeAccountIdentifier`<sup>Required</sup> <a name="snowflakeAccountIdentifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifier"></a>

```typescript
public readonly snowflakeAccountIdentifier: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationSnowflakeAccountSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---



