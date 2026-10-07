# `integrationTwilioAccount` Submodule <a name="`integrationTwilioAccount` Submodule" id="@cdktn/provider-datadog.integrationTwilioAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationTwilioAccount <a name="IntegrationTwilioAccount" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account datadog_integration_twilio_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccount(scope: Construct, id: string, config: IntegrationTwilioAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig">IntegrationTwilioAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig">IntegrationTwilioAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows">putDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetDataflows">resetDataflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication"></a>

```typescript
public putAuthentication(value: IntegrationTwilioAccountAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

---

##### `putDataflows` <a name="putDataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows"></a>

```typescript
public putDataflows(value: IntegrationTwilioAccountDataflows): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings"></a>

```typescript
public putSettings(value: IntegrationTwilioAccountSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

---

##### `resetDataflows` <a name="resetDataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetDataflows"></a>

```typescript
public resetDataflows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationTwilioAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

integrationTwilioAccount.IntegrationTwilioAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntegrationTwilioAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationTwilioAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationTwilioAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationTwilioAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference">IntegrationTwilioAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference">IntegrationTwilioAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference">IntegrationTwilioAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authenticationInput">authenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflowsInput">dataflowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authentication"></a>

```typescript
public readonly authentication: IntegrationTwilioAccountAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference">IntegrationTwilioAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflows"></a>

```typescript
public readonly dataflows: IntegrationTwilioAccountDataflowsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference">IntegrationTwilioAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settings"></a>

```typescript
public readonly settings: IntegrationTwilioAccountSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference">IntegrationTwilioAccountSettingsOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | IntegrationTwilioAccountAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

---

##### `dataflowsInput`<sup>Optional</sup> <a name="dataflowsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflowsInput"></a>

```typescript
public readonly dataflowsInput: IResolvable | IntegrationTwilioAccountDataflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | IntegrationTwilioAccountSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationTwilioAccountAuthentication <a name="IntegrationTwilioAccountAuthentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountAuthentication: integrationTwilioAccount.IntegrationTwilioAccountAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.property.twilioIntegrationAccountBasicAuth">twilioIntegrationAccountBasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a></code> | The basic authentication method and username configured on the account. |

---

##### `twilioIntegrationAccountBasicAuth`<sup>Optional</sup> <a name="twilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.property.twilioIntegrationAccountBasicAuth"></a>

```typescript
public readonly twilioIntegrationAccountBasicAuth: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

The basic authentication method and username configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_integration_account_basic_auth IntegrationTwilioAccount#twilio_integration_account_basic_auth}

---

### IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth <a name="IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth: integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWo">passwordWo</a></code> | <code>string</code> | Secret password or private key. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | Version trigger for password_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.username">username</a></code> | <code>string</code> | Non-secret username or public identifier for the credential pair. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.authType">authType</a></code> | <code>string</code> | The authentication method type. Valid values are `basic`. Defaults to `"basic"`. |

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

Secret password or private key. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#password_wo IntegrationTwilioAccount#password_wo}

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

Version trigger for password_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#password_wo_version IntegrationTwilioAccount#password_wo_version}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Non-secret username or public identifier for the credential pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#username IntegrationTwilioAccount#username}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authentication method type. Valid values are `basic`. Defaults to `"basic"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#auth_type IntegrationTwilioAccount#auth_type}

---

### IntegrationTwilioAccountConfig <a name="IntegrationTwilioAccountConfig" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountConfig: integrationTwilioAccount.IntegrationTwilioAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a></code> | Authentication configured on the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.name">name</a></code> | <code>string</code> | Human-readable name of the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a></code> | Settings configured on the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a></code> | Data Datadog collects from Twilio, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.authentication"></a>

```typescript
public readonly authentication: IntegrationTwilioAccountAuthentication;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

Authentication configured on the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#authentication IntegrationTwilioAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable name of the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#name IntegrationTwilioAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.settings"></a>

```typescript
public readonly settings: IntegrationTwilioAccountSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

Settings configured on the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#settings IntegrationTwilioAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dataflows"></a>

```typescript
public readonly dataflows: IntegrationTwilioAccountDataflows;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

Data Datadog collects from Twilio, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#dataflows IntegrationTwilioAccount#dataflows}

---

### IntegrationTwilioAccountDataflows <a name="IntegrationTwilioAccountDataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflows: integrationTwilioAccount.IntegrationTwilioAccountDataflows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioAlertsLogs">twilioAlertsLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a></code> | Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCallSummariesLogs">twilioCallSummariesLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a></code> | Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCloudCostMetrics">twilioCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a></code> | Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioEventsLogs">twilioEventsLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a></code> | Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioMessagesLogs">twilioMessagesLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a></code> | Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors. |

---

##### `twilioAlertsLogs`<sup>Optional</sup> <a name="twilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioAlertsLogs"></a>

```typescript
public readonly twilioAlertsLogs: IntegrationTwilioAccountDataflowsTwilioAlertsLogs;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_alerts_logs IntegrationTwilioAccount#twilio_alerts_logs}

---

##### `twilioCallSummariesLogs`<sup>Optional</sup> <a name="twilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCallSummariesLogs"></a>

```typescript
public readonly twilioCallSummariesLogs: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account.

Requires Voice Insights Advanced Features to be enabled on the Twilio account; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_call_summaries_logs IntegrationTwilioAccount#twilio_call_summaries_logs}

---

##### `twilioCloudCostMetrics`<sup>Optional</sup> <a name="twilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCloudCostMetrics"></a>

```typescript
public readonly twilioCloudCostMetrics: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_cloud_cost_metrics IntegrationTwilioAccount#twilio_cloud_cost_metrics}

---

##### `twilioEventsLogs`<sup>Optional</sup> <a name="twilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioEventsLogs"></a>

```typescript
public readonly twilioEventsLogs: IntegrationTwilioAccountDataflowsTwilioEventsLogs;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording.

Actions are recorded whether they came from the REST API, a user in the Twilio Console, or Twilio itself. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) analyzes and correlates these logs to detect threats in real time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_events_logs IntegrationTwilioAccount#twilio_events_logs}

---

##### `twilioMessagesLogs`<sup>Optional</sup> <a name="twilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioMessagesLogs"></a>

```typescript
public readonly twilioMessagesLogs: IntegrationTwilioAccountDataflowsTwilioMessagesLogs;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors.

A log is produced when you send a message through the REST API, when Twilio executes a TwiML instruction, and when someone messages one of your Twilio numbers or channel addresses. Message bodies are never collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_messages_logs IntegrationTwilioAccount#twilio_messages_logs}

---

### IntegrationTwilioAccountDataflowsTwilioAlertsLogs <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioAlertsLogs: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioAlertsLogsStatus: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus = { ... }
```


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioCallSummariesLogs: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus = { ... }
```


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioCloudCostMetrics: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus = { ... }
```


### IntegrationTwilioAccountDataflowsTwilioEventsLogs <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioEventsLogs: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioEventsLogsStatus: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus = { ... }
```


### IntegrationTwilioAccountDataflowsTwilioMessagesLogs <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioMessagesLogs: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountDataflowsTwilioMessagesLogsStatus: integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus = { ... }
```


### IntegrationTwilioAccountSettings <a name="IntegrationTwilioAccountSettings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

const integrationTwilioAccountSettings: integrationTwilioAccount.IntegrationTwilioAccountSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.accountSid">accountSid</a></code> | <code>string</code> | Twilio Account SID that uniquely identifies your Twilio account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.censorLogs">censorLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy. |

---

##### `accountSid`<sup>Required</sup> <a name="accountSid" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.accountSid"></a>

```typescript
public readonly accountSid: string;
```

- *Type:* string

Twilio Account SID that uniquely identifies your Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#account_sid IntegrationTwilioAccount#account_sid}

---

##### `censorLogs`<sup>Optional</sup> <a name="censorLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.censorLogs"></a>

```typescript
public readonly censorLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#censor_logs IntegrationTwilioAccount#censor_logs}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationTwilioAccountAuthenticationOutputReference <a name="IntegrationTwilioAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth">putTwilioIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resetTwilioIntegrationAccountBasicAuth">resetTwilioIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTwilioIntegrationAccountBasicAuth` <a name="putTwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth"></a>

```typescript
public putTwilioIntegrationAccountBasicAuth(value: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

---

##### `resetTwilioIntegrationAccountBasicAuth` <a name="resetTwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resetTwilioIntegrationAccountBasicAuth"></a>

```typescript
public resetTwilioIntegrationAccountBasicAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuth">twilioIntegrationAccountBasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuthInput">twilioIntegrationAccountBasicAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `twilioIntegrationAccountBasicAuth`<sup>Required</sup> <a name="twilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuth"></a>

```typescript
public readonly twilioIntegrationAccountBasicAuth: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference</a>

---

##### `twilioIntegrationAccountBasicAuthInput`<sup>Optional</sup> <a name="twilioIntegrationAccountBasicAuthInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuthInput"></a>

```typescript
public readonly twilioIntegrationAccountBasicAuthInput: IResolvable | IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

---


### IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference <a name="IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoInput">passwordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput">passwordWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWo">passwordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoInput"></a>

```typescript
public readonly passwordWoInput: string;
```

- *Type:* string

---

##### `passwordWoVersionInput`<sup>Optional</sup> <a name="passwordWoVersionInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput"></a>

```typescript
public readonly passwordWoVersionInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### ~~`passwordWo`~~<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly passwordWo: string;
```

- *Type:* string

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

---


### IntegrationTwilioAccountDataflowsOutputReference <a name="IntegrationTwilioAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs">putTwilioAlertsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs">putTwilioCallSummariesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics">putTwilioCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs">putTwilioEventsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs">putTwilioMessagesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioAlertsLogs">resetTwilioAlertsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCallSummariesLogs">resetTwilioCallSummariesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCloudCostMetrics">resetTwilioCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioEventsLogs">resetTwilioEventsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioMessagesLogs">resetTwilioMessagesLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTwilioAlertsLogs` <a name="putTwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs"></a>

```typescript
public putTwilioAlertsLogs(value: IntegrationTwilioAccountDataflowsTwilioAlertsLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

---

##### `putTwilioCallSummariesLogs` <a name="putTwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs"></a>

```typescript
public putTwilioCallSummariesLogs(value: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

---

##### `putTwilioCloudCostMetrics` <a name="putTwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics"></a>

```typescript
public putTwilioCloudCostMetrics(value: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

---

##### `putTwilioEventsLogs` <a name="putTwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs"></a>

```typescript
public putTwilioEventsLogs(value: IntegrationTwilioAccountDataflowsTwilioEventsLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

---

##### `putTwilioMessagesLogs` <a name="putTwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs"></a>

```typescript
public putTwilioMessagesLogs(value: IntegrationTwilioAccountDataflowsTwilioMessagesLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

---

##### `resetTwilioAlertsLogs` <a name="resetTwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioAlertsLogs"></a>

```typescript
public resetTwilioAlertsLogs(): void
```

##### `resetTwilioCallSummariesLogs` <a name="resetTwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCallSummariesLogs"></a>

```typescript
public resetTwilioCallSummariesLogs(): void
```

##### `resetTwilioCloudCostMetrics` <a name="resetTwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCloudCostMetrics"></a>

```typescript
public resetTwilioCloudCostMetrics(): void
```

##### `resetTwilioEventsLogs` <a name="resetTwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioEventsLogs"></a>

```typescript
public resetTwilioEventsLogs(): void
```

##### `resetTwilioMessagesLogs` <a name="resetTwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioMessagesLogs"></a>

```typescript
public resetTwilioMessagesLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogs">twilioAlertsLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogs">twilioCallSummariesLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetrics">twilioCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogs">twilioEventsLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogs">twilioMessagesLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogsInput">twilioAlertsLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogsInput">twilioCallSummariesLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetricsInput">twilioCloudCostMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogsInput">twilioEventsLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogsInput">twilioMessagesLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `twilioAlertsLogs`<sup>Required</sup> <a name="twilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogs"></a>

```typescript
public readonly twilioAlertsLogs: IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference</a>

---

##### `twilioCallSummariesLogs`<sup>Required</sup> <a name="twilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogs"></a>

```typescript
public readonly twilioCallSummariesLogs: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference</a>

---

##### `twilioCloudCostMetrics`<sup>Required</sup> <a name="twilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetrics"></a>

```typescript
public readonly twilioCloudCostMetrics: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference</a>

---

##### `twilioEventsLogs`<sup>Required</sup> <a name="twilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogs"></a>

```typescript
public readonly twilioEventsLogs: IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference</a>

---

##### `twilioMessagesLogs`<sup>Required</sup> <a name="twilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogs"></a>

```typescript
public readonly twilioMessagesLogs: IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference</a>

---

##### `twilioAlertsLogsInput`<sup>Optional</sup> <a name="twilioAlertsLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogsInput"></a>

```typescript
public readonly twilioAlertsLogsInput: IResolvable | IntegrationTwilioAccountDataflowsTwilioAlertsLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

---

##### `twilioCallSummariesLogsInput`<sup>Optional</sup> <a name="twilioCallSummariesLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogsInput"></a>

```typescript
public readonly twilioCallSummariesLogsInput: IResolvable | IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

---

##### `twilioCloudCostMetricsInput`<sup>Optional</sup> <a name="twilioCloudCostMetricsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetricsInput"></a>

```typescript
public readonly twilioCloudCostMetricsInput: IResolvable | IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

---

##### `twilioEventsLogsInput`<sup>Optional</sup> <a name="twilioEventsLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogsInput"></a>

```typescript
public readonly twilioEventsLogsInput: IResolvable | IntegrationTwilioAccountDataflowsTwilioEventsLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

---

##### `twilioMessagesLogsInput`<sup>Optional</sup> <a name="twilioMessagesLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogsInput"></a>

```typescript
public readonly twilioMessagesLogsInput: IResolvable | IntegrationTwilioAccountDataflowsTwilioMessagesLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountDataflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

---


### IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountDataflowsTwilioAlertsLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

---


### IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

---


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

---


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountDataflowsTwilioEventsLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

---


### IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.status"></a>

```typescript
public readonly status: IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountDataflowsTwilioMessagesLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

---


### IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus</a>

---


### IntegrationTwilioAccountSettingsOutputReference <a name="IntegrationTwilioAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer"></a>

```typescript
import { integrationTwilioAccount } from '@cdktn/provider-datadog'

new integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resetCensorLogs">resetCensorLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCensorLogs` <a name="resetCensorLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resetCensorLogs"></a>

```typescript
public resetCensorLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSidInput">accountSidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogsInput">censorLogsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSid">accountSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogs">censorLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountSidInput`<sup>Optional</sup> <a name="accountSidInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSidInput"></a>

```typescript
public readonly accountSidInput: string;
```

- *Type:* string

---

##### `censorLogsInput`<sup>Optional</sup> <a name="censorLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogsInput"></a>

```typescript
public readonly censorLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `accountSid`<sup>Required</sup> <a name="accountSid" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSid"></a>

```typescript
public readonly accountSid: string;
```

- *Type:* string

---

##### `censorLogs`<sup>Required</sup> <a name="censorLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogs"></a>

```typescript
public readonly censorLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationTwilioAccountSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

---



