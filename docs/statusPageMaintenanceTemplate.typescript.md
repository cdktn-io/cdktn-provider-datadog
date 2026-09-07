# `statusPageMaintenanceTemplate` Submodule <a name="`statusPageMaintenanceTemplate` Submodule" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageMaintenanceTemplate <a name="StatusPageMaintenanceTemplate" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template datadog_status_page_maintenance_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer"></a>

```typescript
import { statusPageMaintenanceTemplate } from '@cdktn/provider-datadog'

new statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate(scope: Construct, id: string, config: StatusPageMaintenanceTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig">StatusPageMaintenanceTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig">StatusPageMaintenanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetCompletedDescription">resetCompletedDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetComponentIds">resetComponentIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetInProgressDescription">resetInProgressDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetMaintenanceTitle">resetMaintenanceTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetScheduledDescription">resetScheduledDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCompletedDescription` <a name="resetCompletedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetCompletedDescription"></a>

```typescript
public resetCompletedDescription(): void
```

##### `resetComponentIds` <a name="resetComponentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetComponentIds"></a>

```typescript
public resetComponentIds(): void
```

##### `resetInProgressDescription` <a name="resetInProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetInProgressDescription"></a>

```typescript
public resetInProgressDescription(): void
```

##### `resetMaintenanceTitle` <a name="resetMaintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetMaintenanceTitle"></a>

```typescript
public resetMaintenanceTitle(): void
```

##### `resetScheduledDescription` <a name="resetScheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetScheduledDescription"></a>

```typescript
public resetScheduledDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct"></a>

```typescript
import { statusPageMaintenanceTemplate } from '@cdktn/provider-datadog'

statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement"></a>

```typescript
import { statusPageMaintenanceTemplate } from '@cdktn/provider-datadog'

statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource"></a>

```typescript
import { statusPageMaintenanceTemplate } from '@cdktn/provider-datadog'

statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport"></a>

```typescript
import { statusPageMaintenanceTemplate } from '@cdktn/provider-datadog'

statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StatusPageMaintenanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StatusPageMaintenanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageMaintenanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescriptionInput">completedDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIdsInput">componentIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescriptionInput">inProgressDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitleInput">maintenanceTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageIdInput">pageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescriptionInput">scheduledDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescription">completedDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIds">componentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescription">inProgressDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitle">maintenanceTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageId">pageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescription">scheduledDescription</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `completedDescriptionInput`<sup>Optional</sup> <a name="completedDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescriptionInput"></a>

```typescript
public readonly completedDescriptionInput: string;
```

- *Type:* string

---

##### `componentIdsInput`<sup>Optional</sup> <a name="componentIdsInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIdsInput"></a>

```typescript
public readonly componentIdsInput: string[];
```

- *Type:* string[]

---

##### `inProgressDescriptionInput`<sup>Optional</sup> <a name="inProgressDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescriptionInput"></a>

```typescript
public readonly inProgressDescriptionInput: string;
```

- *Type:* string

---

##### `maintenanceTitleInput`<sup>Optional</sup> <a name="maintenanceTitleInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitleInput"></a>

```typescript
public readonly maintenanceTitleInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageIdInput"></a>

```typescript
public readonly pageIdInput: string;
```

- *Type:* string

---

##### `scheduledDescriptionInput`<sup>Optional</sup> <a name="scheduledDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescriptionInput"></a>

```typescript
public readonly scheduledDescriptionInput: string;
```

- *Type:* string

---

##### `completedDescription`<sup>Required</sup> <a name="completedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescription"></a>

```typescript
public readonly completedDescription: string;
```

- *Type:* string

---

##### `componentIds`<sup>Required</sup> <a name="componentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIds"></a>

```typescript
public readonly componentIds: string[];
```

- *Type:* string[]

---

##### `inProgressDescription`<sup>Required</sup> <a name="inProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescription"></a>

```typescript
public readonly inProgressDescription: string;
```

- *Type:* string

---

##### `maintenanceTitle`<sup>Required</sup> <a name="maintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitle"></a>

```typescript
public readonly maintenanceTitle: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

---

##### `scheduledDescription`<sup>Required</sup> <a name="scheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescription"></a>

```typescript
public readonly scheduledDescription: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageMaintenanceTemplateConfig <a name="StatusPageMaintenanceTemplateConfig" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.Initializer"></a>

```typescript
import { statusPageMaintenanceTemplate } from '@cdktn/provider-datadog'

const statusPageMaintenanceTemplateConfig: statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the maintenance template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.pageId">pageId</a></code> | <code>string</code> | The ID of the status page this maintenance template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.completedDescription">completedDescription</a></code> | <code>string</code> | The pre-filled description shown once the maintenance is completed. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.componentIds">componentIds</a></code> | <code>string[]</code> | The IDs of the components affected by a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.inProgressDescription">inProgressDescription</a></code> | <code>string</code> | The pre-filled description shown while the maintenance is in progress. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.maintenanceTitle">maintenanceTitle</a></code> | <code>string</code> | The title used for a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.scheduledDescription">scheduledDescription</a></code> | <code>string</code> | The pre-filled description shown while the maintenance is scheduled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the maintenance template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#name StatusPageMaintenanceTemplate#name}

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

The ID of the status page this maintenance template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#page_id StatusPageMaintenanceTemplate#page_id}

---

##### `completedDescription`<sup>Optional</sup> <a name="completedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.completedDescription"></a>

```typescript
public readonly completedDescription: string;
```

- *Type:* string

The pre-filled description shown once the maintenance is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#completed_description StatusPageMaintenanceTemplate#completed_description}

---

##### `componentIds`<sup>Optional</sup> <a name="componentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.componentIds"></a>

```typescript
public readonly componentIds: string[];
```

- *Type:* string[]

The IDs of the components affected by a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#component_ids StatusPageMaintenanceTemplate#component_ids}

---

##### `inProgressDescription`<sup>Optional</sup> <a name="inProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.inProgressDescription"></a>

```typescript
public readonly inProgressDescription: string;
```

- *Type:* string

The pre-filled description shown while the maintenance is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#in_progress_description StatusPageMaintenanceTemplate#in_progress_description}

---

##### `maintenanceTitle`<sup>Optional</sup> <a name="maintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.maintenanceTitle"></a>

```typescript
public readonly maintenanceTitle: string;
```

- *Type:* string

The title used for a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#maintenance_title StatusPageMaintenanceTemplate#maintenance_title}

---

##### `scheduledDescription`<sup>Optional</sup> <a name="scheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.scheduledDescription"></a>

```typescript
public readonly scheduledDescription: string;
```

- *Type:* string

The pre-filled description shown while the maintenance is scheduled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#scheduled_description StatusPageMaintenanceTemplate#scheduled_description}

---



