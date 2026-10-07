# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccount(scope: Construct, id: string, config: IntegrationDatabricksAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows">putDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDataflows">resetDataflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication"></a>

```typescript
public putAuthentication(value: IntegrationDatabricksAccountAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---

##### `putDataflows` <a name="putDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows"></a>

```typescript
public putDataflows(value: IntegrationDatabricksAccountDataflows): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings"></a>

```typescript
public putSettings(value: IntegrationDatabricksAccountSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---

##### `resetDataflows` <a name="resetDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDataflows"></a>

```typescript
public resetDataflows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference">IntegrationDatabricksAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference">IntegrationDatabricksAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference">IntegrationDatabricksAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authenticationInput">authenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflowsInput">dataflowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authentication"></a>

```typescript
public readonly authentication: IntegrationDatabricksAccountAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference">IntegrationDatabricksAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflows"></a>

```typescript
public readonly dataflows: IntegrationDatabricksAccountDataflowsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference">IntegrationDatabricksAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settings"></a>

```typescript
public readonly settings: IntegrationDatabricksAccountSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference">IntegrationDatabricksAccountSettingsOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | IntegrationDatabricksAccountAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---

##### `dataflowsInput`<sup>Optional</sup> <a name="dataflowsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflowsInput"></a>

```typescript
public readonly dataflowsInput: IResolvable | IntegrationDatabricksAccountDataflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationDatabricksAccountSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthentication <a name="IntegrationDatabricksAccountAuthentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountAuthentication: integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountBearerTokenAuth">databricksIntegrationAccountBearerTokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | The bearer token authentication method configured on the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountOAuthAuth">databricksIntegrationAccountOAuthAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | The Databricks OAuth authentication method and service principal configured on the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountPrivateActionRunnerAuth">databricksIntegrationAccountPrivateActionRunnerAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | The Private Action Runner authentication method configured on the account. |

---

##### `databricksIntegrationAccountBearerTokenAuth`<sup>Optional</sup> <a name="databricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountBearerTokenAuth"></a>

```typescript
public readonly databricksIntegrationAccountBearerTokenAuth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

The bearer token authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_bearer_token_auth IntegrationDatabricksAccount#databricks_integration_account_bearer_token_auth}

---

##### `databricksIntegrationAccountOAuthAuth`<sup>Optional</sup> <a name="databricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountOAuthAuth"></a>

```typescript
public readonly databricksIntegrationAccountOAuthAuth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

The Databricks OAuth authentication method and service principal configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_o_auth_auth IntegrationDatabricksAccount#databricks_integration_account_o_auth_auth}

---

##### `databricksIntegrationAccountPrivateActionRunnerAuth`<sup>Optional</sup> <a name="databricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

```typescript
public readonly databricksIntegrationAccountPrivateActionRunnerAuth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

The Private Action Runner authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_private_action_runner_auth IntegrationDatabricksAccount#databricks_integration_account_private_action_runner_auth}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth: integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.authType">authType</a></code> | <code>string</code> | The authentication method type. Valid values are `bearer_token`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWo">tokenWo</a></code> | <code>string</code> | Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWoVersion">tokenWoVersion</a></code> | <code>string</code> | Version trigger for token_wo rotation. String length must be at least 1. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authentication method type. Valid values are `bearer_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `tokenWo`<sup>Optional</sup> <a name="tokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWo"></a>

```typescript
public readonly tokenWo: string;
```

- *Type:* string

Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo IntegrationDatabricksAccount#token_wo}

---

##### `tokenWoVersion`<sup>Optional</sup> <a name="tokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWoVersion"></a>

```typescript
public readonly tokenWoVersion: string;
```

- *Type:* string

Version trigger for token_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo_version IntegrationDatabricksAccount#token_wo_version}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth: integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientId">clientId</a></code> | <code>string</code> | Client ID of the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | Secret of the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | Version trigger for client_secret_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.authType">authType</a></code> | <code>string</code> | The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID of the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `clientSecretWo`<sup>Required</sup> <a name="clientSecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWo"></a>

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

Secret of the Databricks service principal.

Generate it under User management > Service principals > Credentials & secrets in Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo IntegrationDatabricksAccount#client_secret_wo}

---

##### `clientSecretWoVersion`<sup>Required</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

Version trigger for client_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo_version IntegrationDatabricksAccount#client_secret_wo_version}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth: integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.connectionId">connectionId</a></code> | <code>string</code> | Unique identifier of the Private Action Runner connection holding the credentials. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.userUuid">userUuid</a></code> | <code>string</code> | Unique identifier of the user the Private Action Runner connection belongs to. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.authType">authType</a></code> | <code>string</code> | The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.secretPath">secretPath</a></code> | <code>string</code> | Path of the credential inside the secret backend configured on the runner. |

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Unique identifier of the Private Action Runner connection holding the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `userUuid`<sup>Required</sup> <a name="userUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.userUuid"></a>

```typescript
public readonly userUuid: string;
```

- *Type:* string

Unique identifier of the user the Private Action Runner connection belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `secretPath`<sup>Optional</sup> <a name="secretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.secretPath"></a>

```typescript
public readonly secretPath: string;
```

- *Type:* string

Path of the credential inside the secret backend configured on the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountConfig: integrationDatabricksAccount.IntegrationDatabricksAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | Authentication configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">name</a></code> | <code>string</code> | Human-readable name of the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | Settings configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | Data Datadog collects from Databricks, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authentication"></a>

```typescript
public readonly authentication: IntegrationDatabricksAccountAuthentication;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

Authentication configured on the Databricks integration account.

A `bearer_token` method indicates an account still on token authentication, which Databricks accepts only on accounts that already use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#authentication IntegrationDatabricksAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable name of the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.settings"></a>

```typescript
public readonly settings: IntegrationDatabricksAccountSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

Settings configured on the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dataflows"></a>

```typescript
public readonly dataflows: IntegrationDatabricksAccountDataflows;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

Data Datadog collects from Databricks, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dataflows IntegrationDatabricksAccount#dataflows}

---

### IntegrationDatabricksAccountDataflows <a name="IntegrationDatabricksAccountDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountDataflows: integrationDatabricksAccount.IntegrationDatabricksAccountDataflows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksCloudCostMetrics">databricksCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityJobsMonitoring">databricksDataObservabilityJobsMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityQualityMonitoring">databricksDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksModelServingMetrics">databricksModelServingMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | Health and usage metrics for your Databricks model serving endpoints. |

---

##### `databricksCloudCostMetrics`<sup>Optional</sup> <a name="databricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksCloudCostMetrics"></a>

```typescript
public readonly databricksCloudCostMetrics: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_cloud_cost_metrics IntegrationDatabricksAccount#databricks_cloud_cost_metrics}

---

##### `databricksDataObservabilityJobsMonitoring`<sup>Optional</sup> <a name="databricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityJobsMonitoring"></a>

```typescript
public readonly databricksDataObservabilityJobsMonitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_jobs_monitoring IntegrationDatabricksAccount#databricks_data_observability_jobs_monitoring}

---

##### `databricksDataObservabilityQualityMonitoring`<sup>Optional</sup> <a name="databricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityQualityMonitoring"></a>

```typescript
public readonly databricksDataObservabilityQualityMonitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_quality_monitoring IntegrationDatabricksAccount#databricks_data_observability_quality_monitoring}

---

##### `databricksModelServingMetrics`<sup>Optional</sup> <a name="databricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksModelServingMetrics"></a>

```typescript
public readonly databricksModelServingMetrics: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

Health and usage metrics for your Databricks model serving endpoints.

Not supported on accounts that authenticate with `private_action_runner`; on those accounts this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_model_serving_metrics IntegrationDatabricksAccount#databricks_model_serving_metrics}

---

### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountDataflowsDatabricksCloudCostMetrics: integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | Settings of the Cloud Cost Management dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.settings"></a>

```typescript
public readonly settings: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings: integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.property.ccmCollectAllWorkspaces">ccmCollectAllWorkspaces</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether cost data is collected for every workspace in the Databricks account rather than this workspace only. |

---

##### `ccmCollectAllWorkspaces`<sup>Optional</sup> <a name="ccmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.property.ccmCollectAllWorkspaces"></a>

```typescript
public readonly ccmCollectAllWorkspaces: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether cost data is collected for every workspace in the Databricks account rather than this workspace only.

This takes effect across the Databricks account: if any one workspace enables it, Datadog collects cost data for all of them regardless of their individual settings, and every covered workspace incurs Cloud Cost Management charges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#ccm_collect_all_workspaces IntegrationDatabricksAccount#ccm_collect_all_workspaces}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring: integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | Settings of the Data Jobs Monitoring dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.settings"></a>

```typescript
public readonly settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

Settings of the Data Jobs Monitoring dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings: integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeyId">ddApiKeyId</a></code> | <code>string</code> | ID of the Datadog API key the global init script uses to submit data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWo">ddApiKeySecretWo</a></code> | <code>string</code> | Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWoVersion">ddApiKeySecretWoVersion</a></code> | <code>string</code> | Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.djmGlobalInitScriptEnabled">djmGlobalInitScriptEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptGpumEnabled">scriptGpumEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether GPU metrics are collected from your Databricks clusters. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptLogsEnabled">scriptLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether driver and worker logs are collected from your Databricks clusters. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.serverlessJobsEnabled">serverlessJobsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute. |

---

##### `ddApiKeyId`<sup>Optional</sup> <a name="ddApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeyId"></a>

```typescript
public readonly ddApiKeyId: string;
```

- *Type:* string

ID of the Datadog API key the global init script uses to submit data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `ddApiKeySecretWo`<sup>Optional</sup> <a name="ddApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWo"></a>

```typescript
public readonly ddApiKeySecretWo: string;
```

- *Type:* string

Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo IntegrationDatabricksAccount#dd_api_key_secret_wo}

---

##### `ddApiKeySecretWoVersion`<sup>Optional</sup> <a name="ddApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWoVersion"></a>

```typescript
public readonly ddApiKeySecretWoVersion: string;
```

- *Type:* string

Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo_version IntegrationDatabricksAccount#dd_api_key_secret_wo_version}

---

##### `djmGlobalInitScriptEnabled`<sup>Optional</sup> <a name="djmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.djmGlobalInitScriptEnabled"></a>

```typescript
public readonly djmGlobalInitScriptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script.

The script does not apply to clusters in Standard access mode. When `false`, the Agent is installed manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `scriptGpumEnabled`<sup>Optional</sup> <a name="scriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptGpumEnabled"></a>

```typescript
public readonly scriptGpumEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether GPU metrics are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `scriptLogsEnabled`<sup>Optional</sup> <a name="scriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptLogsEnabled"></a>

```typescript
public readonly scriptLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether driver and worker logs are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `serverlessJobsEnabled`<sup>Optional</sup> <a name="serverlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.serverlessJobsEnabled"></a>

```typescript
public readonly serverlessJobsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute.

This compute has no clusters for the global init script to target, so collection reads the Databricks system tables and requires `system_tables_sql_warehouse_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring: integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | Settings of the Data Observability dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.settings"></a>

```typescript
public readonly settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings: integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.doCrawlersCron">doCrawlersCron</a></code> | <code>string</code> | Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.syncSystemCatalog">syncSystemCatalog</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs. |

---

##### `doCrawlersCron`<sup>Optional</sup> <a name="doCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.doCrawlersCron"></a>

```typescript
public readonly doCrawlersCron: string;
```

- *Type:* string

Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata.

Currently, only hourly (`0 * * * *`) and daily (`0 0 * * *`) are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `syncSystemCatalog`<sup>Optional</sup> <a name="syncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.syncSystemCatalog"></a>

```typescript
public readonly syncSystemCatalog: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#sync_system_catalog IntegrationDatabricksAccount#sync_system_catalog}

---

### IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics <a name="IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountDataflowsDatabricksModelServingMetrics: integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

### IntegrationDatabricksAccountSettings <a name="IntegrationDatabricksAccountSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountSettings: integrationDatabricksAccount.IntegrationDatabricksAccountSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | URL of the Databricks workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.systemTablesSqlWarehouseId">systemTablesSqlWarehouseId</a></code> | <code>string</code> | ID of the SQL warehouse used to query the Databricks system tables. |

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

URL of the Databricks workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `systemTablesSqlWarehouseId`<sup>Optional</sup> <a name="systemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.systemTablesSqlWarehouseId"></a>

```typescript
public readonly systemTablesSqlWarehouseId: string;
```

- *Type:* string

ID of the SQL warehouse used to query the Databricks system tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWo">resetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWoVersion">resetTokenWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetTokenWo` <a name="resetTokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWo"></a>

```typescript
public resetTokenWo(): void
```

##### `resetTokenWoVersion` <a name="resetTokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWoVersion"></a>

```typescript
public resetTokenWoVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoInput">tokenWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersionInput">tokenWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWo">tokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersion">tokenWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `tokenWoInput`<sup>Optional</sup> <a name="tokenWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoInput"></a>

```typescript
public readonly tokenWoInput: string;
```

- *Type:* string

---

##### `tokenWoVersionInput`<sup>Optional</sup> <a name="tokenWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersionInput"></a>

```typescript
public readonly tokenWoVersionInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### ~~`tokenWo`~~<sup>Required</sup> <a name="tokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly tokenWo: string;
```

- *Type:* string

---

##### `tokenWoVersion`<sup>Required</sup> <a name="tokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersion"></a>

```typescript
public readonly tokenWoVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---


### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoInput">clientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersionInput">clientSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretWoInput`<sup>Optional</sup> <a name="clientSecretWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoInput"></a>

```typescript
public readonly clientSecretWoInput: string;
```

- *Type:* string

---

##### `clientSecretWoVersionInput`<sup>Optional</sup> <a name="clientSecretWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersionInput"></a>

```typescript
public readonly clientSecretWoVersionInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### ~~`clientSecretWo`~~<sup>Required</sup> <a name="clientSecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

---

##### `clientSecretWoVersion`<sup>Required</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---


### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetSecretPath">resetSecretPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetSecretPath` <a name="resetSecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetSecretPath"></a>

```typescript
public resetSecretPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPathInput">secretPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuidInput">userUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPath">secretPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuid">userUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `secretPathInput`<sup>Optional</sup> <a name="secretPathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPathInput"></a>

```typescript
public readonly secretPathInput: string;
```

- *Type:* string

---

##### `userUuidInput`<sup>Optional</sup> <a name="userUuidInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuidInput"></a>

```typescript
public readonly userUuidInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `secretPath`<sup>Required</sup> <a name="secretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPath"></a>

```typescript
public readonly secretPath: string;
```

- *Type:* string

---

##### `userUuid`<sup>Required</sup> <a name="userUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuid"></a>

```typescript
public readonly userUuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---


### IntegrationDatabricksAccountAuthenticationOutputReference <a name="IntegrationDatabricksAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth">putDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth">putDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth">putDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountBearerTokenAuth">resetDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountOAuthAuth">resetDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountPrivateActionRunnerAuth">resetDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabricksIntegrationAccountBearerTokenAuth` <a name="putDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth"></a>

```typescript
public putDatabricksIntegrationAccountBearerTokenAuth(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---

##### `putDatabricksIntegrationAccountOAuthAuth` <a name="putDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth"></a>

```typescript
public putDatabricksIntegrationAccountOAuthAuth(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---

##### `putDatabricksIntegrationAccountPrivateActionRunnerAuth` <a name="putDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

```typescript
public putDatabricksIntegrationAccountPrivateActionRunnerAuth(value: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---

##### `resetDatabricksIntegrationAccountBearerTokenAuth` <a name="resetDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountBearerTokenAuth"></a>

```typescript
public resetDatabricksIntegrationAccountBearerTokenAuth(): void
```

##### `resetDatabricksIntegrationAccountOAuthAuth` <a name="resetDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountOAuthAuth"></a>

```typescript
public resetDatabricksIntegrationAccountOAuthAuth(): void
```

##### `resetDatabricksIntegrationAccountPrivateActionRunnerAuth` <a name="resetDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

```typescript
public resetDatabricksIntegrationAccountPrivateActionRunnerAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuth">databricksIntegrationAccountBearerTokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuth">databricksIntegrationAccountOAuthAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuth">databricksIntegrationAccountPrivateActionRunnerAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuthInput">databricksIntegrationAccountBearerTokenAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuthInput">databricksIntegrationAccountOAuthAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuthInput">databricksIntegrationAccountPrivateActionRunnerAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databricksIntegrationAccountBearerTokenAuth`<sup>Required</sup> <a name="databricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuth"></a>

```typescript
public readonly databricksIntegrationAccountBearerTokenAuth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference</a>

---

##### `databricksIntegrationAccountOAuthAuth`<sup>Required</sup> <a name="databricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuth"></a>

```typescript
public readonly databricksIntegrationAccountOAuthAuth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference</a>

---

##### `databricksIntegrationAccountPrivateActionRunnerAuth`<sup>Required</sup> <a name="databricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

```typescript
public readonly databricksIntegrationAccountPrivateActionRunnerAuth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference</a>

---

##### `databricksIntegrationAccountBearerTokenAuthInput`<sup>Optional</sup> <a name="databricksIntegrationAccountBearerTokenAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuthInput"></a>

```typescript
public readonly databricksIntegrationAccountBearerTokenAuthInput: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---

##### `databricksIntegrationAccountOAuthAuthInput`<sup>Optional</sup> <a name="databricksIntegrationAccountOAuthAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuthInput"></a>

```typescript
public readonly databricksIntegrationAccountOAuthAuthInput: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---

##### `databricksIntegrationAccountPrivateActionRunnerAuthInput`<sup>Optional</sup> <a name="databricksIntegrationAccountPrivateActionRunnerAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuthInput"></a>

```typescript
public readonly databricksIntegrationAccountPrivateActionRunnerAuthInput: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resetCcmCollectAllWorkspaces">resetCcmCollectAllWorkspaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCcmCollectAllWorkspaces` <a name="resetCcmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resetCcmCollectAllWorkspaces"></a>

```typescript
public resetCcmCollectAllWorkspaces(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspacesInput">ccmCollectAllWorkspacesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspaces">ccmCollectAllWorkspaces</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ccmCollectAllWorkspacesInput`<sup>Optional</sup> <a name="ccmCollectAllWorkspacesInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspacesInput"></a>

```typescript
public readonly ccmCollectAllWorkspacesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ccmCollectAllWorkspaces`<sup>Required</sup> <a name="ccmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspaces"></a>

```typescript
public readonly ccmCollectAllWorkspaces: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeyId">resetDdApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWo">resetDdApiKeySecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWoVersion">resetDdApiKeySecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDjmGlobalInitScriptEnabled">resetDjmGlobalInitScriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptGpumEnabled">resetScriptGpumEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptLogsEnabled">resetScriptLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetServerlessJobsEnabled">resetServerlessJobsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDdApiKeyId` <a name="resetDdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeyId"></a>

```typescript
public resetDdApiKeyId(): void
```

##### `resetDdApiKeySecretWo` <a name="resetDdApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWo"></a>

```typescript
public resetDdApiKeySecretWo(): void
```

##### `resetDdApiKeySecretWoVersion` <a name="resetDdApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWoVersion"></a>

```typescript
public resetDdApiKeySecretWoVersion(): void
```

##### `resetDjmGlobalInitScriptEnabled` <a name="resetDjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDjmGlobalInitScriptEnabled"></a>

```typescript
public resetDjmGlobalInitScriptEnabled(): void
```

##### `resetScriptGpumEnabled` <a name="resetScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptGpumEnabled"></a>

```typescript
public resetScriptGpumEnabled(): void
```

##### `resetScriptLogsEnabled` <a name="resetScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptLogsEnabled"></a>

```typescript
public resetScriptLogsEnabled(): void
```

##### `resetServerlessJobsEnabled` <a name="resetServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetServerlessJobsEnabled"></a>

```typescript
public resetServerlessJobsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyIdInput">ddApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoInput">ddApiKeySecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersionInput">ddApiKeySecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabledInput">djmGlobalInitScriptEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabledInput">scriptGpumEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabledInput">scriptLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabledInput">serverlessJobsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyId">ddApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWo">ddApiKeySecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersion">ddApiKeySecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabled">djmGlobalInitScriptEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabled">scriptGpumEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabled">scriptLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabled">serverlessJobsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ddApiKeyIdInput`<sup>Optional</sup> <a name="ddApiKeyIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyIdInput"></a>

```typescript
public readonly ddApiKeyIdInput: string;
```

- *Type:* string

---

##### `ddApiKeySecretWoInput`<sup>Optional</sup> <a name="ddApiKeySecretWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoInput"></a>

```typescript
public readonly ddApiKeySecretWoInput: string;
```

- *Type:* string

---

##### `ddApiKeySecretWoVersionInput`<sup>Optional</sup> <a name="ddApiKeySecretWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersionInput"></a>

```typescript
public readonly ddApiKeySecretWoVersionInput: string;
```

- *Type:* string

---

##### `djmGlobalInitScriptEnabledInput`<sup>Optional</sup> <a name="djmGlobalInitScriptEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabledInput"></a>

```typescript
public readonly djmGlobalInitScriptEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scriptGpumEnabledInput`<sup>Optional</sup> <a name="scriptGpumEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabledInput"></a>

```typescript
public readonly scriptGpumEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scriptLogsEnabledInput`<sup>Optional</sup> <a name="scriptLogsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabledInput"></a>

```typescript
public readonly scriptLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serverlessJobsEnabledInput`<sup>Optional</sup> <a name="serverlessJobsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabledInput"></a>

```typescript
public readonly serverlessJobsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ddApiKeyId`<sup>Required</sup> <a name="ddApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyId"></a>

```typescript
public readonly ddApiKeyId: string;
```

- *Type:* string

---

##### ~~`ddApiKeySecretWo`~~<sup>Required</sup> <a name="ddApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly ddApiKeySecretWo: string;
```

- *Type:* string

---

##### `ddApiKeySecretWoVersion`<sup>Required</sup> <a name="ddApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersion"></a>

```typescript
public readonly ddApiKeySecretWoVersion: string;
```

- *Type:* string

---

##### `djmGlobalInitScriptEnabled`<sup>Required</sup> <a name="djmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabled"></a>

```typescript
public readonly djmGlobalInitScriptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scriptGpumEnabled`<sup>Required</sup> <a name="scriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabled"></a>

```typescript
public readonly scriptGpumEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scriptLogsEnabled`<sup>Required</sup> <a name="scriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabled"></a>

```typescript
public readonly scriptLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serverlessJobsEnabled`<sup>Required</sup> <a name="serverlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabled"></a>

```typescript
public readonly serverlessJobsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings"></a>

```typescript
public putSettings(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settings"></a>

```typescript
public readonly settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetDoCrawlersCron">resetDoCrawlersCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSystemCatalog">resetSyncSystemCatalog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoCrawlersCron` <a name="resetDoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetDoCrawlersCron"></a>

```typescript
public resetDoCrawlersCron(): void
```

##### `resetSyncSystemCatalog` <a name="resetSyncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSystemCatalog"></a>

```typescript
public resetSyncSystemCatalog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCronInput">doCrawlersCronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalogInput">syncSystemCatalogInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCron">doCrawlersCron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalog">syncSystemCatalog</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `doCrawlersCronInput`<sup>Optional</sup> <a name="doCrawlersCronInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCronInput"></a>

```typescript
public readonly doCrawlersCronInput: string;
```

- *Type:* string

---

##### `syncSystemCatalogInput`<sup>Optional</sup> <a name="syncSystemCatalogInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalogInput"></a>

```typescript
public readonly syncSystemCatalogInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doCrawlersCron`<sup>Required</sup> <a name="doCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCron"></a>

```typescript
public readonly doCrawlersCron: string;
```

- *Type:* string

---

##### `syncSystemCatalog`<sup>Required</sup> <a name="syncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalog"></a>

```typescript
public readonly syncSystemCatalog: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---


### IntegrationDatabricksAccountDataflowsOutputReference <a name="IntegrationDatabricksAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics">putDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring">putDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring">putDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics">putDatabricksModelServingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksCloudCostMetrics">resetDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityJobsMonitoring">resetDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityQualityMonitoring">resetDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksModelServingMetrics">resetDatabricksModelServingMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabricksCloudCostMetrics` <a name="putDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics"></a>

```typescript
public putDatabricksCloudCostMetrics(value: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---

##### `putDatabricksDataObservabilityJobsMonitoring` <a name="putDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring"></a>

```typescript
public putDatabricksDataObservabilityJobsMonitoring(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---

##### `putDatabricksDataObservabilityQualityMonitoring` <a name="putDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring"></a>

```typescript
public putDatabricksDataObservabilityQualityMonitoring(value: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---

##### `putDatabricksModelServingMetrics` <a name="putDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics"></a>

```typescript
public putDatabricksModelServingMetrics(value: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---

##### `resetDatabricksCloudCostMetrics` <a name="resetDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksCloudCostMetrics"></a>

```typescript
public resetDatabricksCloudCostMetrics(): void
```

##### `resetDatabricksDataObservabilityJobsMonitoring` <a name="resetDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityJobsMonitoring"></a>

```typescript
public resetDatabricksDataObservabilityJobsMonitoring(): void
```

##### `resetDatabricksDataObservabilityQualityMonitoring` <a name="resetDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityQualityMonitoring"></a>

```typescript
public resetDatabricksDataObservabilityQualityMonitoring(): void
```

##### `resetDatabricksModelServingMetrics` <a name="resetDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksModelServingMetrics"></a>

```typescript
public resetDatabricksModelServingMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetrics">databricksCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoring">databricksDataObservabilityJobsMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoring">databricksDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetrics">databricksModelServingMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetricsInput">databricksCloudCostMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoringInput">databricksDataObservabilityJobsMonitoringInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoringInput">databricksDataObservabilityQualityMonitoringInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetricsInput">databricksModelServingMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databricksCloudCostMetrics`<sup>Required</sup> <a name="databricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetrics"></a>

```typescript
public readonly databricksCloudCostMetrics: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference</a>

---

##### `databricksDataObservabilityJobsMonitoring`<sup>Required</sup> <a name="databricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoring"></a>

```typescript
public readonly databricksDataObservabilityJobsMonitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference</a>

---

##### `databricksDataObservabilityQualityMonitoring`<sup>Required</sup> <a name="databricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoring"></a>

```typescript
public readonly databricksDataObservabilityQualityMonitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference</a>

---

##### `databricksModelServingMetrics`<sup>Required</sup> <a name="databricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetrics"></a>

```typescript
public readonly databricksModelServingMetrics: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference</a>

---

##### `databricksCloudCostMetricsInput`<sup>Optional</sup> <a name="databricksCloudCostMetricsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetricsInput"></a>

```typescript
public readonly databricksCloudCostMetricsInput: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---

##### `databricksDataObservabilityJobsMonitoringInput`<sup>Optional</sup> <a name="databricksDataObservabilityJobsMonitoringInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoringInput"></a>

```typescript
public readonly databricksDataObservabilityJobsMonitoringInput: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---

##### `databricksDataObservabilityQualityMonitoringInput`<sup>Optional</sup> <a name="databricksDataObservabilityQualityMonitoringInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoringInput"></a>

```typescript
public readonly databricksDataObservabilityQualityMonitoringInput: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---

##### `databricksModelServingMetricsInput`<sup>Optional</sup> <a name="databricksModelServingMetricsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetricsInput"></a>

```typescript
public readonly databricksModelServingMetricsInput: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountDataflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---


### IntegrationDatabricksAccountSettingsOutputReference <a name="IntegrationDatabricksAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resetSystemTablesSqlWarehouseId">resetSystemTablesSqlWarehouseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSystemTablesSqlWarehouseId` <a name="resetSystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resetSystemTablesSqlWarehouseId"></a>

```typescript
public resetSystemTablesSqlWarehouseId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseIdInput">systemTablesSqlWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrlInput">workspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseId">systemTablesSqlWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemTablesSqlWarehouseIdInput`<sup>Optional</sup> <a name="systemTablesSqlWarehouseIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseIdInput"></a>

```typescript
public readonly systemTablesSqlWarehouseIdInput: string;
```

- *Type:* string

---

##### `workspaceUrlInput`<sup>Optional</sup> <a name="workspaceUrlInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrlInput"></a>

```typescript
public readonly workspaceUrlInput: string;
```

- *Type:* string

---

##### `systemTablesSqlWarehouseId`<sup>Required</sup> <a name="systemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseId"></a>

```typescript
public readonly systemTablesSqlWarehouseId: string;
```

- *Type:* string

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---



