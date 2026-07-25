# `integrationAwsAccountCcmConfig` Submodule <a name="`integrationAwsAccountCcmConfig` Submodule" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAccountCcmConfig <a name="IntegrationAwsAccountCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config datadog_integration_aws_account_ccm_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

new integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig(scope: Construct, id: string, config: IntegrationAwsAccountCcmConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig">IntegrationAwsAccountCcmConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig">IntegrationAwsAccountCcmConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig">putCcmConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetCcmConfig">resetCcmConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCcmConfig` <a name="putCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig"></a>

```typescript
public putCcmConfig(value: IntegrationAwsAccountCcmConfigCcmConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---

##### `resetCcmConfig` <a name="resetCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetCcmConfig"></a>

```typescript
public resetCcmConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationAwsAccountCcmConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationAwsAccountCcmConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationAwsAccountCcmConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfig">ccmConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference">IntegrationAwsAccountCcmConfigCcmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigIdInput">awsAccountConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfigInput">ccmConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigId">awsAccountConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ccmConfig`<sup>Required</sup> <a name="ccmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfig"></a>

```typescript
public readonly ccmConfig: IntegrationAwsAccountCcmConfigCcmConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference">IntegrationAwsAccountCcmConfigCcmConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `awsAccountConfigIdInput`<sup>Optional</sup> <a name="awsAccountConfigIdInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigIdInput"></a>

```typescript
public readonly awsAccountConfigIdInput: string;
```

- *Type:* string

---

##### `ccmConfigInput`<sup>Optional</sup> <a name="ccmConfigInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfigInput"></a>

```typescript
public readonly ccmConfigInput: IResolvable | IntegrationAwsAccountCcmConfigCcmConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---

##### `awsAccountConfigId`<sup>Required</sup> <a name="awsAccountConfigId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigId"></a>

```typescript
public readonly awsAccountConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAccountCcmConfigCcmConfig <a name="IntegrationAwsAccountCcmConfigCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.Initializer"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

const integrationAwsAccountCcmConfigCcmConfig: integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.property.dataExportConfigs">dataExportConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>[]</code> | data_export_configs block. |

---

##### `dataExportConfigs`<sup>Optional</sup> <a name="dataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.property.dataExportConfigs"></a>

```typescript
public readonly dataExportConfigs: IResolvable | IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>[]

data_export_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#data_export_configs IntegrationAwsAccountCcmConfig#data_export_configs}

---

### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.Initializer"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

const integrationAwsAccountCcmConfigCcmConfigDataExportConfigs: integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketName">bucketName</a></code> | <code>string</code> | Name of the S3 bucket where the Cost and Usage Report is stored. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | AWS region of the S3 bucket. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportName">reportName</a></code> | <code>string</code> | Name of the Cost and Usage Report. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportPrefix">reportPrefix</a></code> | <code>string</code> | S3 prefix where the Cost and Usage Report is stored. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportType">reportType</a></code> | <code>string</code> | Type of the Cost and Usage Report. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Name of the S3 bucket where the Cost and Usage Report is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#bucket_name IntegrationAwsAccountCcmConfig#bucket_name}

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

AWS region of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#bucket_region IntegrationAwsAccountCcmConfig#bucket_region}

---

##### `reportName`<sup>Optional</sup> <a name="reportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

Name of the Cost and Usage Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#report_name IntegrationAwsAccountCcmConfig#report_name}

---

##### `reportPrefix`<sup>Optional</sup> <a name="reportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportPrefix"></a>

```typescript
public readonly reportPrefix: string;
```

- *Type:* string

S3 prefix where the Cost and Usage Report is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#report_prefix IntegrationAwsAccountCcmConfig#report_prefix}

---

##### `reportType`<sup>Optional</sup> <a name="reportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportType"></a>

```typescript
public readonly reportType: string;
```

- *Type:* string

Type of the Cost and Usage Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#report_type IntegrationAwsAccountCcmConfig#report_type}

---

### IntegrationAwsAccountCcmConfigConfig <a name="IntegrationAwsAccountCcmConfigConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.Initializer"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

const integrationAwsAccountCcmConfigConfig: integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.awsAccountConfigId">awsAccountConfigId</a></code> | <code>string</code> | Unique Datadog ID of the AWS Account Integration Config. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.ccmConfig">ccmConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | ccm_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountConfigId`<sup>Required</sup> <a name="awsAccountConfigId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.awsAccountConfigId"></a>

```typescript
public readonly awsAccountConfigId: string;
```

- *Type:* string

Unique Datadog ID of the AWS Account Integration Config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#aws_account_config_id IntegrationAwsAccountCcmConfig#aws_account_config_id}

---

##### `ccmConfig`<sup>Optional</sup> <a name="ccmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.ccmConfig"></a>

```typescript
public readonly ccmConfig: IntegrationAwsAccountCcmConfigCcmConfig;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

ccm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/integration_aws_account_ccm_config#ccm_config IntegrationAwsAccountCcmConfig#ccm_config}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

new integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get"></a>

```typescript
public get(index: number): IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>[]

---


### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

new integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportName">resetReportName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportPrefix">resetReportPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportType">resetReportType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketRegion"></a>

```typescript
public resetBucketRegion(): void
```

##### `resetReportName` <a name="resetReportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportName"></a>

```typescript
public resetReportName(): void
```

##### `resetReportPrefix` <a name="resetReportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportPrefix"></a>

```typescript
public resetReportPrefix(): void
```

##### `resetReportType` <a name="resetReportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportType"></a>

```typescript
public resetReportType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegionInput">bucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportNameInput">reportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefixInput">reportPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportTypeInput">reportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportName">reportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefix">reportPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportType">reportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegionInput"></a>

```typescript
public readonly bucketRegionInput: string;
```

- *Type:* string

---

##### `reportNameInput`<sup>Optional</sup> <a name="reportNameInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportNameInput"></a>

```typescript
public readonly reportNameInput: string;
```

- *Type:* string

---

##### `reportPrefixInput`<sup>Optional</sup> <a name="reportPrefixInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefixInput"></a>

```typescript
public readonly reportPrefixInput: string;
```

- *Type:* string

---

##### `reportTypeInput`<sup>Optional</sup> <a name="reportTypeInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportTypeInput"></a>

```typescript
public readonly reportTypeInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

---

##### `reportPrefix`<sup>Required</sup> <a name="reportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefix"></a>

```typescript
public readonly reportPrefix: string;
```

- *Type:* string

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportType"></a>

```typescript
public readonly reportType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>

---


### IntegrationAwsAccountCcmConfigCcmConfigOutputReference <a name="IntegrationAwsAccountCcmConfigCcmConfigOutputReference" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccountCcmConfig } from '@cdktn/provider-datadog'

new integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs">putDataExportConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resetDataExportConfigs">resetDataExportConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataExportConfigs` <a name="putDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs"></a>

```typescript
public putDataExportConfigs(value: IResolvable | IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>[]

---

##### `resetDataExportConfigs` <a name="resetDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resetDataExportConfigs"></a>

```typescript
public resetDataExportConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigs">dataExportConfigs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigsInput">dataExportConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataExportConfigs`<sup>Required</sup> <a name="dataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigs"></a>

```typescript
public readonly dataExportConfigs: IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList</a>

---

##### `dataExportConfigsInput`<sup>Optional</sup> <a name="dataExportConfigsInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigsInput"></a>

```typescript
public readonly dataExportConfigsInput: IResolvable | IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountCcmConfigCcmConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---



