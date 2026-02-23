# `cloudInventorySyncConfig` Submodule <a name="`cloudInventorySyncConfig` Submodule" id="@cdktn/provider-datadog.cloudInventorySyncConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudInventorySyncConfig <a name="CloudInventorySyncConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config datadog_cloud_inventory_sync_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

new cloudInventorySyncConfig.CloudInventorySyncConfig(scope: Construct, id: string, config: CloudInventorySyncConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig">CloudInventorySyncConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig">CloudInventorySyncConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp">putGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp">resetGcp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws"></a>

```typescript
public putAws(value: CloudInventorySyncConfigAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure"></a>

```typescript
public putAzure(value: CloudInventorySyncConfigAzure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---

##### `putGcp` <a name="putGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp"></a>

```typescript
public putGcp(value: CloudInventorySyncConfigGcp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---

##### `resetAws` <a name="resetAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetAzure` <a name="resetAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure"></a>

```typescript
public resetAzure(): void
```

##### `resetGcp` <a name="resetGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp"></a>

```typescript
public resetGcp(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudInventorySyncConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudInventorySyncConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudInventorySyncConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput">awsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput">azureInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput">gcpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws"></a>

```typescript
public readonly aws: CloudInventorySyncConfigAwsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure"></a>

```typescript
public readonly azure: CloudInventorySyncConfigAzureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a>

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp"></a>

```typescript
public readonly gcp: CloudInventorySyncConfigGcpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput"></a>

```typescript
public readonly awsInput: IResolvable | CloudInventorySyncConfigAws;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput"></a>

```typescript
public readonly azureInput: IResolvable | CloudInventorySyncConfigAzure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string;
```

- *Type:* string

---

##### `gcpInput`<sup>Optional</sup> <a name="gcpInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput"></a>

```typescript
public readonly gcpInput: IResolvable | CloudInventorySyncConfigGcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudInventorySyncConfigAws <a name="CloudInventorySyncConfigAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.Initializer"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

const cloudInventorySyncConfigAws: cloudInventorySyncConfig.CloudInventorySyncConfigAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | AWS Account ID of the account holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName">destinationBucketName</a></code> | <code>string</code> | Name of the S3 bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion">destinationBucketRegion</a></code> | <code>string</code> | AWS Region of the bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix">destinationPrefix</a></code> | <code>string</code> | Prefix path within the bucket for inventory files. |

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

AWS Account ID of the account holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#aws_account_id CloudInventorySyncConfig#aws_account_id}

---

##### `destinationBucketName`<sup>Optional</sup> <a name="destinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName"></a>

```typescript
public readonly destinationBucketName: string;
```

- *Type:* string

Name of the S3 bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `destinationBucketRegion`<sup>Optional</sup> <a name="destinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion"></a>

```typescript
public readonly destinationBucketRegion: string;
```

- *Type:* string

AWS Region of the bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#destination_bucket_region CloudInventorySyncConfig#destination_bucket_region}

---

##### `destinationPrefix`<sup>Optional</sup> <a name="destinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix"></a>

```typescript
public readonly destinationPrefix: string;
```

- *Type:* string

Prefix path within the bucket for inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#destination_prefix CloudInventorySyncConfig#destination_prefix}

---

### CloudInventorySyncConfigAzure <a name="CloudInventorySyncConfigAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.Initializer"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

const cloudInventorySyncConfigAzure: cloudInventorySyncConfig.CloudInventorySyncConfigAzure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId">clientId</a></code> | <code>string</code> | Azure Client ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container">container</a></code> | <code>string</code> | Azure Storage Container name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | Azure Resource Group name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount">storageAccount</a></code> | <code>string</code> | Azure Storage Account name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Azure Subscription ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId">tenantId</a></code> | <code>string</code> | Azure Tenant ID. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Azure Client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#client_id CloudInventorySyncConfig#client_id}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

Azure Storage Container name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#container CloudInventorySyncConfig#container}

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

Azure Resource Group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#resource_group CloudInventorySyncConfig#resource_group}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

Azure Storage Account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#storage_account CloudInventorySyncConfig#storage_account}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Azure Subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#subscription_id CloudInventorySyncConfig#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Azure Tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#tenant_id CloudInventorySyncConfig#tenant_id}

---

### CloudInventorySyncConfigConfig <a name="CloudInventorySyncConfigConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.Initializer"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

const cloudInventorySyncConfigConfig: cloudInventorySyncConfig.CloudInventorySyncConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | The cloud provider type. Valid values are `aws`, `azure`, `gcp`. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | gcp block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

The cloud provider type. Valid values are `aws`, `azure`, `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#cloud_provider CloudInventorySyncConfig#cloud_provider}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws"></a>

```typescript
public readonly aws: CloudInventorySyncConfigAws;
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#aws CloudInventorySyncConfig#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure"></a>

```typescript
public readonly azure: CloudInventorySyncConfigAzure;
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#azure CloudInventorySyncConfig#azure}

---

##### `gcp`<sup>Optional</sup> <a name="gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp"></a>

```typescript
public readonly gcp: CloudInventorySyncConfigGcp;
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#gcp CloudInventorySyncConfig#gcp}

---

### CloudInventorySyncConfigGcp <a name="CloudInventorySyncConfigGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.Initializer"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

const cloudInventorySyncConfigGcp: cloudInventorySyncConfig.CloudInventorySyncConfigGcp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName">destinationBucketName</a></code> | <code>string</code> | Name of the GCS bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId">projectId</a></code> | <code>string</code> | GCP Project ID of the project holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email used for reading the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName">sourceBucketName</a></code> | <code>string</code> | Name of the source bucket the inventory report is generated for. |

---

##### `destinationBucketName`<sup>Optional</sup> <a name="destinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName"></a>

```typescript
public readonly destinationBucketName: string;
```

- *Type:* string

Name of the GCS bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

GCP Project ID of the project holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#project_id CloudInventorySyncConfig#project_id}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email used for reading the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#service_account_email CloudInventorySyncConfig#service_account_email}

---

##### `sourceBucketName`<sup>Optional</sup> <a name="sourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName"></a>

```typescript
public readonly sourceBucketName: string;
```

- *Type:* string

Name of the source bucket the inventory report is generated for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/cloud_inventory_sync_config#source_bucket_name CloudInventorySyncConfig#source_bucket_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudInventorySyncConfigAwsOutputReference <a name="CloudInventorySyncConfigAwsOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

new cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName">resetDestinationBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion">resetDestinationBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix">resetDestinationPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetDestinationBucketName` <a name="resetDestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName"></a>

```typescript
public resetDestinationBucketName(): void
```

##### `resetDestinationBucketRegion` <a name="resetDestinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion"></a>

```typescript
public resetDestinationBucketRegion(): void
```

##### `resetDestinationPrefix` <a name="resetDestinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix"></a>

```typescript
public resetDestinationPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput">destinationBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput">destinationBucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput">destinationPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName">destinationBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion">destinationBucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix">destinationPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `destinationBucketNameInput`<sup>Optional</sup> <a name="destinationBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput"></a>

```typescript
public readonly destinationBucketNameInput: string;
```

- *Type:* string

---

##### `destinationBucketRegionInput`<sup>Optional</sup> <a name="destinationBucketRegionInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput"></a>

```typescript
public readonly destinationBucketRegionInput: string;
```

- *Type:* string

---

##### `destinationPrefixInput`<sup>Optional</sup> <a name="destinationPrefixInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput"></a>

```typescript
public readonly destinationPrefixInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `destinationBucketName`<sup>Required</sup> <a name="destinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName"></a>

```typescript
public readonly destinationBucketName: string;
```

- *Type:* string

---

##### `destinationBucketRegion`<sup>Required</sup> <a name="destinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion"></a>

```typescript
public readonly destinationBucketRegion: string;
```

- *Type:* string

---

##### `destinationPrefix`<sup>Required</sup> <a name="destinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix"></a>

```typescript
public readonly destinationPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudInventorySyncConfigAws;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---


### CloudInventorySyncConfigAzureOutputReference <a name="CloudInventorySyncConfigAzureOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

new cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup"></a>

```typescript
public resetResourceGroup(): void
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount"></a>

```typescript
public resetStorageAccount(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount">storageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: string;
```

- *Type:* string

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudInventorySyncConfigAzure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---


### CloudInventorySyncConfigGcpOutputReference <a name="CloudInventorySyncConfigGcpOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer"></a>

```typescript
import { cloudInventorySyncConfig } from '@cdktn/provider-datadog'

new cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName">resetDestinationBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName">resetSourceBucketName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationBucketName` <a name="resetDestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName"></a>

```typescript
public resetDestinationBucketName(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetSourceBucketName` <a name="resetSourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName"></a>

```typescript
public resetSourceBucketName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput">destinationBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput">sourceBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName">destinationBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName">sourceBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationBucketNameInput`<sup>Optional</sup> <a name="destinationBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput"></a>

```typescript
public readonly destinationBucketNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `sourceBucketNameInput`<sup>Optional</sup> <a name="sourceBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput"></a>

```typescript
public readonly sourceBucketNameInput: string;
```

- *Type:* string

---

##### `destinationBucketName`<sup>Required</sup> <a name="destinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName"></a>

```typescript
public readonly destinationBucketName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `sourceBucketName`<sup>Required</sup> <a name="sourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName"></a>

```typescript
public readonly sourceBucketName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudInventorySyncConfigGcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---



