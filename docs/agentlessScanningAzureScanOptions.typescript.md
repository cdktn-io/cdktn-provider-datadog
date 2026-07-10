# `agentlessScanningAzureScanOptions` Submodule <a name="`agentlessScanningAzureScanOptions` Submodule" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningAzureScanOptions <a name="AgentlessScanningAzureScanOptions" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_azure_scan_options datadog_agentless_scanning_azure_scan_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer"></a>

```typescript
import { agentlessScanningAzureScanOptions } from '@cdktn/provider-datadog'

new agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions(scope: Construct, id: string, config: AgentlessScanningAzureScanOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig">AgentlessScanningAzureScanOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig">AgentlessScanningAzureScanOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetComplianceHost">resetComplianceHost</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComplianceHost` <a name="resetComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetComplianceHost"></a>

```typescript
public resetComplianceHost(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct"></a>

```typescript
import { agentlessScanningAzureScanOptions } from '@cdktn/provider-datadog'

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement"></a>

```typescript
import { agentlessScanningAzureScanOptions } from '@cdktn/provider-datadog'

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource"></a>

```typescript
import { agentlessScanningAzureScanOptions } from '@cdktn/provider-datadog'

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport"></a>

```typescript
import { agentlessScanningAzureScanOptions } from '@cdktn/provider-datadog'

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentlessScanningAzureScanOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentlessScanningAzureScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_azure_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentlessScanningAzureScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionIdInput">azureSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHostInput">complianceHostInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOsInput">vulnContainersOsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOsInput">vulnHostOsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHost">complianceHost</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOs">vulnContainersOs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOs">vulnHostOs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `azureSubscriptionIdInput`<sup>Optional</sup> <a name="azureSubscriptionIdInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionIdInput"></a>

```typescript
public readonly azureSubscriptionIdInput: string;
```

- *Type:* string

---

##### `complianceHostInput`<sup>Optional</sup> <a name="complianceHostInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHostInput"></a>

```typescript
public readonly complianceHostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vulnContainersOsInput`<sup>Optional</sup> <a name="vulnContainersOsInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOsInput"></a>

```typescript
public readonly vulnContainersOsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vulnHostOsInput`<sup>Optional</sup> <a name="vulnHostOsInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOsInput"></a>

```typescript
public readonly vulnHostOsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `azureSubscriptionId`<sup>Required</sup> <a name="azureSubscriptionId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionId"></a>

```typescript
public readonly azureSubscriptionId: string;
```

- *Type:* string

---

##### `complianceHost`<sup>Required</sup> <a name="complianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHost"></a>

```typescript
public readonly complianceHost: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOs"></a>

```typescript
public readonly vulnContainersOs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOs"></a>

```typescript
public readonly vulnHostOs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningAzureScanOptionsConfig <a name="AgentlessScanningAzureScanOptionsConfig" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.Initializer"></a>

```typescript
import { agentlessScanningAzureScanOptions } from '@cdktn/provider-datadog'

const agentlessScanningAzureScanOptionsConfig: agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>string</code> | The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format). |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnContainersOs">vulnContainersOs</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnHostOs">vulnHostOs</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.complianceHost">complianceHost</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether host compliance scanning is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `azureSubscriptionId`<sup>Required</sup> <a name="azureSubscriptionId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.azureSubscriptionId"></a>

```typescript
public readonly azureSubscriptionId: string;
```

- *Type:* string

The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_azure_scan_options#azure_subscription_id AgentlessScanningAzureScanOptions#azure_subscription_id}

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnContainersOs"></a>

```typescript
public readonly vulnContainersOs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_azure_scan_options#vuln_containers_os AgentlessScanningAzureScanOptions#vuln_containers_os}

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnHostOs"></a>

```typescript
public readonly vulnHostOs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_azure_scan_options#vuln_host_os AgentlessScanningAzureScanOptions#vuln_host_os}

---

##### `complianceHost`<sup>Optional</sup> <a name="complianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.complianceHost"></a>

```typescript
public readonly complianceHost: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether host compliance scanning is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_azure_scan_options#compliance_host AgentlessScanningAzureScanOptions#compliance_host}

---



