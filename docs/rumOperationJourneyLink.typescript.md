# `rumOperationJourneyLink` Submodule <a name="`rumOperationJourneyLink` Submodule" id="@cdktn/provider-datadog.rumOperationJourneyLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumOperationJourneyLink <a name="RumOperationJourneyLink" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link datadog_rum_operation_journey_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.Initializer"></a>

```typescript
import { rumOperationJourneyLink } from '@cdktn/provider-datadog'

new rumOperationJourneyLink.RumOperationJourneyLink(scope: Construct, id: string, config: RumOperationJourneyLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig">RumOperationJourneyLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig">RumOperationJourneyLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RumOperationJourneyLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isConstruct"></a>

```typescript
import { rumOperationJourneyLink } from '@cdktn/provider-datadog'

rumOperationJourneyLink.RumOperationJourneyLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isTerraformElement"></a>

```typescript
import { rumOperationJourneyLink } from '@cdktn/provider-datadog'

rumOperationJourneyLink.RumOperationJourneyLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isTerraformResource"></a>

```typescript
import { rumOperationJourneyLink } from '@cdktn/provider-datadog'

rumOperationJourneyLink.RumOperationJourneyLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.generateConfigForImport"></a>

```typescript
import { rumOperationJourneyLink } from '@cdktn/provider-datadog'

rumOperationJourneyLink.RumOperationJourneyLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RumOperationJourneyLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RumOperationJourneyLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RumOperationJourneyLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RumOperationJourneyLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.journeyIdInput">journeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.operationIdInput">operationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.journeyId">journeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.operationId">operationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `journeyIdInput`<sup>Optional</sup> <a name="journeyIdInput" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.journeyIdInput"></a>

```typescript
public readonly journeyIdInput: string;
```

- *Type:* string

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.operationIdInput"></a>

```typescript
public readonly operationIdInput: string;
```

- *Type:* string

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RumOperationJourneyLinkConfig <a name="RumOperationJourneyLinkConfig" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.Initializer"></a>

```typescript
import { rumOperationJourneyLink } from '@cdktn/provider-datadog'

const rumOperationJourneyLinkConfig: rumOperationJourneyLink.RumOperationJourneyLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.journeyId">journeyId</a></code> | <code>string</code> | ID of the journey. |
| <code><a href="#@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.operationId">operationId</a></code> | <code>string</code> | ID of the RUM operation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `journeyId`<sup>Required</sup> <a name="journeyId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.journeyId"></a>

```typescript
public readonly journeyId: string;
```

- *Type:* string

ID of the journey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link#journey_id RumOperationJourneyLink#journey_id}

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-datadog.rumOperationJourneyLink.RumOperationJourneyLinkConfig.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

ID of the RUM operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link#operation_id RumOperationJourneyLink#operation_id}

---



