# `integrationElasticCloudAccount` Submodule <a name="`integrationElasticCloudAccount` Submodule" id="@cdktn/provider-datadog.integrationElasticCloudAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationElasticCloudAccount <a name="IntegrationElasticCloudAccount" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account datadog_integration_elastic_cloud_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccount(scope: Construct, id: string, config: IntegrationElasticCloudAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig">IntegrationElasticCloudAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig">IntegrationElasticCloudAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows">putDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetDataflows">resetDataflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication"></a>

```typescript
public putAuthentication(value: IntegrationElasticCloudAccountAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

---

##### `putDataflows` <a name="putDataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows"></a>

```typescript
public putDataflows(value: IntegrationElasticCloudAccountDataflows): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings"></a>

```typescript
public putSettings(value: IntegrationElasticCloudAccountSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

---

##### `resetDataflows` <a name="resetDataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetDataflows"></a>

```typescript
public resetDataflows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationElasticCloudAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntegrationElasticCloudAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationElasticCloudAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationElasticCloudAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationElasticCloudAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference">IntegrationElasticCloudAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference">IntegrationElasticCloudAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference">IntegrationElasticCloudAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authenticationInput">authenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflowsInput">dataflowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authentication"></a>

```typescript
public readonly authentication: IntegrationElasticCloudAccountAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference">IntegrationElasticCloudAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflows"></a>

```typescript
public readonly dataflows: IntegrationElasticCloudAccountDataflowsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference">IntegrationElasticCloudAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settings"></a>

```typescript
public readonly settings: IntegrationElasticCloudAccountSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference">IntegrationElasticCloudAccountSettingsOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | IntegrationElasticCloudAccountAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

---

##### `dataflowsInput`<sup>Optional</sup> <a name="dataflowsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflowsInput"></a>

```typescript
public readonly dataflowsInput: IResolvable | IntegrationElasticCloudAccountDataflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationElasticCloudAccountSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationElasticCloudAccountAuthentication <a name="IntegrationElasticCloudAccountAuthentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountAuthentication: integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.property.elasticCloudIntegrationAccountBasicAuth">elasticCloudIntegrationAccountBasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | The basic authentication method and username configured on the account. |

---

##### `elasticCloudIntegrationAccountBasicAuth`<sup>Optional</sup> <a name="elasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.property.elasticCloudIntegrationAccountBasicAuth"></a>

```typescript
public readonly elasticCloudIntegrationAccountBasicAuth: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

The basic authentication method and username configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_integration_account_basic_auth IntegrationElasticCloudAccount#elastic_cloud_integration_account_basic_auth}

---

### IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth <a name="IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth: integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWo">passwordWo</a></code> | <code>string</code> | Secret password or private key. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | Version trigger for password_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.username">username</a></code> | <code>string</code> | Non-secret username or public identifier for the credential pair. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.authType">authType</a></code> | <code>string</code> | The authentication method type. Valid values are `basic`. Defaults to `"basic"`. |

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

Secret password or private key. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#password_wo IntegrationElasticCloudAccount#password_wo}

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

Version trigger for password_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#password_wo_version IntegrationElasticCloudAccount#password_wo_version}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Non-secret username or public identifier for the credential pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#username IntegrationElasticCloudAccount#username}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authentication method type. Valid values are `basic`. Defaults to `"basic"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#auth_type IntegrationElasticCloudAccount#auth_type}

---

### IntegrationElasticCloudAccountConfig <a name="IntegrationElasticCloudAccountConfig" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountConfig: integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | Authentication configured on the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.name">name</a></code> | <code>string</code> | Human-readable name of the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | Settings configured on the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | Data Datadog collects from Elastic Cloud, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.authentication"></a>

```typescript
public readonly authentication: IntegrationElasticCloudAccountAuthentication;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

Authentication configured on the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#authentication IntegrationElasticCloudAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable name of the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#name IntegrationElasticCloudAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.settings"></a>

```typescript
public readonly settings: IntegrationElasticCloudAccountSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

Settings configured on the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#settings IntegrationElasticCloudAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dataflows"></a>

```typescript
public readonly dataflows: IntegrationElasticCloudAccountDataflows;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

Data Datadog collects from Elastic Cloud, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#dataflows IntegrationElasticCloudAccount#dataflows}

---

### IntegrationElasticCloudAccountDataflows <a name="IntegrationElasticCloudAccountDataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflows: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudDetailedIndexStats">elasticCloudDetailedIndexStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | Primary shard metrics broken down per index, rather than aggregated across the cluster. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudIndexStats">elasticCloudIndexStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPendingTaskStats">elasticCloudPendingTaskStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | Metrics for cluster-level changes that have been submitted but not yet executed. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardGracefulTimeout">elasticCloudPrimaryShardGracefulTimeout</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardStats">elasticCloudPrimaryShardStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | Metrics covering only the cluster's primary shards. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudShardAllocationStats">elasticCloudShardAllocationStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | Metrics for how many shards are allocated to each data node, and the disk space they use. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudSlmStats">elasticCloudSlmStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | Metrics about the actions taken by snapshot lifecycle management. |

---

##### `elasticCloudDetailedIndexStats`<sup>Optional</sup> <a name="elasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudDetailedIndexStats"></a>

```typescript
public readonly elasticCloudDetailedIndexStats: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

Primary shard metrics broken down per index, rather than aggregated across the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_detailed_index_stats IntegrationElasticCloudAccount#elastic_cloud_detailed_index_stats}

---

##### `elasticCloudIndexStats`<sup>Optional</sup> <a name="elasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudIndexStats"></a>

```typescript
public readonly elasticCloudIndexStats: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_index_stats IntegrationElasticCloudAccount#elastic_cloud_index_stats}

---

##### `elasticCloudPendingTaskStats`<sup>Optional</sup> <a name="elasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPendingTaskStats"></a>

```typescript
public readonly elasticCloudPendingTaskStats: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

Metrics for cluster-level changes that have been submitted but not yet executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_pending_task_stats IntegrationElasticCloudAccount#elastic_cloud_pending_task_stats}

---

##### `elasticCloudPrimaryShardGracefulTimeout`<sup>Optional</sup> <a name="elasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardGracefulTimeout"></a>

```typescript
public readonly elasticCloudPrimaryShardGracefulTimeout: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run.

Only has an effect alongside `elastic-cloud-primary-shard-stats`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_graceful_timeout IntegrationElasticCloudAccount#elastic_cloud_primary_shard_graceful_timeout}

---

##### `elasticCloudPrimaryShardStats`<sup>Optional</sup> <a name="elasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardStats"></a>

```typescript
public readonly elasticCloudPrimaryShardStats: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

Metrics covering only the cluster's primary shards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_stats IntegrationElasticCloudAccount#elastic_cloud_primary_shard_stats}

---

##### `elasticCloudShardAllocationStats`<sup>Optional</sup> <a name="elasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudShardAllocationStats"></a>

```typescript
public readonly elasticCloudShardAllocationStats: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

Metrics for how many shards are allocated to each data node, and the disk space they use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_shard_allocation_stats IntegrationElasticCloudAccount#elastic_cloud_shard_allocation_stats}

---

##### `elasticCloudSlmStats`<sup>Optional</sup> <a name="elasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudSlmStats"></a>

```typescript
public readonly elasticCloudSlmStats: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

Metrics about the actions taken by snapshot lifecycle management.

Requires the `read_slm` Elasticsearch cluster privilege on the role of the user in `authentication`; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_slm_stats IntegrationElasticCloudAccount#elastic_cloud_slm_stats}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus = { ... }
```


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudIndexStats: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus = { ... }
```


### IntegrationElasticCloudAccountDataflowsElasticCloudMetrics <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetrics" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudMetrics: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics = { ... }
```


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudMetricsStatus: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus = { ... }
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus = { ... }
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this tolerance is applied. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this tolerance is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus = { ... }
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus = { ... }
```


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus = { ... }
```


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudSlmStats: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus: integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus = { ... }
```


### IntegrationElasticCloudAccountSettings <a name="IntegrationElasticCloudAccountSettings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

const integrationElasticCloudAccountSettings: integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.url">url</a></code> | <code>string</code> | Elastic Cloud deployment URL. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.tags">tags</a></code> | <code>string</code> | Comma-separated list of custom tags for this Elastic Cloud deployment. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Elastic Cloud deployment URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#url IntegrationElasticCloudAccount#url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

Comma-separated list of custom tags for this Elastic Cloud deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#tags IntegrationElasticCloudAccount#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference <a name="IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoInput">passwordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput">passwordWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWo">passwordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoInput"></a>

```typescript
public readonly passwordWoInput: string;
```

- *Type:* string

---

##### `passwordWoVersionInput`<sup>Optional</sup> <a name="passwordWoVersionInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput"></a>

```typescript
public readonly passwordWoVersionInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### ~~`passwordWo`~~<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly passwordWo: string;
```

- *Type:* string

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

---


### IntegrationElasticCloudAccountAuthenticationOutputReference <a name="IntegrationElasticCloudAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth">putElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resetElasticCloudIntegrationAccountBasicAuth">resetElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElasticCloudIntegrationAccountBasicAuth` <a name="putElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth"></a>

```typescript
public putElasticCloudIntegrationAccountBasicAuth(value: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

---

##### `resetElasticCloudIntegrationAccountBasicAuth` <a name="resetElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resetElasticCloudIntegrationAccountBasicAuth"></a>

```typescript
public resetElasticCloudIntegrationAccountBasicAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuth">elasticCloudIntegrationAccountBasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuthInput">elasticCloudIntegrationAccountBasicAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elasticCloudIntegrationAccountBasicAuth`<sup>Required</sup> <a name="elasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuth"></a>

```typescript
public readonly elasticCloudIntegrationAccountBasicAuth: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference</a>

---

##### `elasticCloudIntegrationAccountBasicAuthInput`<sup>Optional</sup> <a name="elasticCloudIntegrationAccountBasicAuthInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuthInput"></a>

```typescript
public readonly elasticCloudIntegrationAccountBasicAuthInput: IResolvable | IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics">IntegrationElasticCloudAccountDataflowsElasticCloudMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudMetrics;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics">IntegrationElasticCloudAccountDataflowsElasticCloudMetrics</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsOutputReference <a name="IntegrationElasticCloudAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats">putElasticCloudDetailedIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats">putElasticCloudIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats">putElasticCloudPendingTaskStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout">putElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats">putElasticCloudPrimaryShardStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats">putElasticCloudShardAllocationStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats">putElasticCloudSlmStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudDetailedIndexStats">resetElasticCloudDetailedIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudIndexStats">resetElasticCloudIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPendingTaskStats">resetElasticCloudPendingTaskStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardGracefulTimeout">resetElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardStats">resetElasticCloudPrimaryShardStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudShardAllocationStats">resetElasticCloudShardAllocationStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudSlmStats">resetElasticCloudSlmStats</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElasticCloudDetailedIndexStats` <a name="putElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats"></a>

```typescript
public putElasticCloudDetailedIndexStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

---

##### `putElasticCloudIndexStats` <a name="putElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats"></a>

```typescript
public putElasticCloudIndexStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

---

##### `putElasticCloudPendingTaskStats` <a name="putElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats"></a>

```typescript
public putElasticCloudPendingTaskStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

---

##### `putElasticCloudPrimaryShardGracefulTimeout` <a name="putElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout"></a>

```typescript
public putElasticCloudPrimaryShardGracefulTimeout(value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

---

##### `putElasticCloudPrimaryShardStats` <a name="putElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats"></a>

```typescript
public putElasticCloudPrimaryShardStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

---

##### `putElasticCloudShardAllocationStats` <a name="putElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats"></a>

```typescript
public putElasticCloudShardAllocationStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

---

##### `putElasticCloudSlmStats` <a name="putElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats"></a>

```typescript
public putElasticCloudSlmStats(value: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

---

##### `resetElasticCloudDetailedIndexStats` <a name="resetElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudDetailedIndexStats"></a>

```typescript
public resetElasticCloudDetailedIndexStats(): void
```

##### `resetElasticCloudIndexStats` <a name="resetElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudIndexStats"></a>

```typescript
public resetElasticCloudIndexStats(): void
```

##### `resetElasticCloudPendingTaskStats` <a name="resetElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPendingTaskStats"></a>

```typescript
public resetElasticCloudPendingTaskStats(): void
```

##### `resetElasticCloudPrimaryShardGracefulTimeout` <a name="resetElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardGracefulTimeout"></a>

```typescript
public resetElasticCloudPrimaryShardGracefulTimeout(): void
```

##### `resetElasticCloudPrimaryShardStats` <a name="resetElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardStats"></a>

```typescript
public resetElasticCloudPrimaryShardStats(): void
```

##### `resetElasticCloudShardAllocationStats` <a name="resetElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudShardAllocationStats"></a>

```typescript
public resetElasticCloudShardAllocationStats(): void
```

##### `resetElasticCloudSlmStats` <a name="resetElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudSlmStats"></a>

```typescript
public resetElasticCloudSlmStats(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStats">elasticCloudDetailedIndexStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStats">elasticCloudIndexStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudMetrics">elasticCloudMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStats">elasticCloudPendingTaskStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeout">elasticCloudPrimaryShardGracefulTimeout</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStats">elasticCloudPrimaryShardStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStats">elasticCloudShardAllocationStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStats">elasticCloudSlmStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStatsInput">elasticCloudDetailedIndexStatsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStatsInput">elasticCloudIndexStatsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStatsInput">elasticCloudPendingTaskStatsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeoutInput">elasticCloudPrimaryShardGracefulTimeoutInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStatsInput">elasticCloudPrimaryShardStatsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStatsInput">elasticCloudShardAllocationStatsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStatsInput">elasticCloudSlmStatsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elasticCloudDetailedIndexStats`<sup>Required</sup> <a name="elasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStats"></a>

```typescript
public readonly elasticCloudDetailedIndexStats: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference</a>

---

##### `elasticCloudIndexStats`<sup>Required</sup> <a name="elasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStats"></a>

```typescript
public readonly elasticCloudIndexStats: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference</a>

---

##### `elasticCloudMetrics`<sup>Required</sup> <a name="elasticCloudMetrics" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudMetrics"></a>

```typescript
public readonly elasticCloudMetrics: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference</a>

---

##### `elasticCloudPendingTaskStats`<sup>Required</sup> <a name="elasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStats"></a>

```typescript
public readonly elasticCloudPendingTaskStats: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference</a>

---

##### `elasticCloudPrimaryShardGracefulTimeout`<sup>Required</sup> <a name="elasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeout"></a>

```typescript
public readonly elasticCloudPrimaryShardGracefulTimeout: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference</a>

---

##### `elasticCloudPrimaryShardStats`<sup>Required</sup> <a name="elasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStats"></a>

```typescript
public readonly elasticCloudPrimaryShardStats: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference</a>

---

##### `elasticCloudShardAllocationStats`<sup>Required</sup> <a name="elasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStats"></a>

```typescript
public readonly elasticCloudShardAllocationStats: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference</a>

---

##### `elasticCloudSlmStats`<sup>Required</sup> <a name="elasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStats"></a>

```typescript
public readonly elasticCloudSlmStats: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference</a>

---

##### `elasticCloudDetailedIndexStatsInput`<sup>Optional</sup> <a name="elasticCloudDetailedIndexStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStatsInput"></a>

```typescript
public readonly elasticCloudDetailedIndexStatsInput: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

---

##### `elasticCloudIndexStatsInput`<sup>Optional</sup> <a name="elasticCloudIndexStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStatsInput"></a>

```typescript
public readonly elasticCloudIndexStatsInput: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

---

##### `elasticCloudPendingTaskStatsInput`<sup>Optional</sup> <a name="elasticCloudPendingTaskStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStatsInput"></a>

```typescript
public readonly elasticCloudPendingTaskStatsInput: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

---

##### `elasticCloudPrimaryShardGracefulTimeoutInput`<sup>Optional</sup> <a name="elasticCloudPrimaryShardGracefulTimeoutInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeoutInput"></a>

```typescript
public readonly elasticCloudPrimaryShardGracefulTimeoutInput: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

---

##### `elasticCloudPrimaryShardStatsInput`<sup>Optional</sup> <a name="elasticCloudPrimaryShardStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStatsInput"></a>

```typescript
public readonly elasticCloudPrimaryShardStatsInput: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

---

##### `elasticCloudShardAllocationStatsInput`<sup>Optional</sup> <a name="elasticCloudShardAllocationStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStatsInput"></a>

```typescript
public readonly elasticCloudShardAllocationStatsInput: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

---

##### `elasticCloudSlmStatsInput`<sup>Optional</sup> <a name="elasticCloudSlmStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStatsInput"></a>

```typescript
public readonly elasticCloudSlmStatsInput: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountDataflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

---


### IntegrationElasticCloudAccountSettingsOutputReference <a name="IntegrationElasticCloudAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer"></a>

```typescript
import { integrationElasticCloudAccount } from '@cdktn/provider-datadog'

new integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tags">tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationElasticCloudAccountSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

---



