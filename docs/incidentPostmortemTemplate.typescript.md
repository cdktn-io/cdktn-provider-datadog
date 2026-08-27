# `incidentPostmortemTemplate` Submodule <a name="`incidentPostmortemTemplate` Submodule" id="@cdktn/provider-datadog.incidentPostmortemTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentPostmortemTemplate <a name="IncidentPostmortemTemplate" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template datadog_incident_postmortem_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

new incidentPostmortemTemplate.IncidentPostmortemTemplate(scope: Construct, id: string, config: IncidentPostmortemTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig">IncidentPostmortemTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig">IncidentPostmortemTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings">putConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings">putGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings">resetConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings">resetGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfluencePostmortemSettings` <a name="putConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings"></a>

```typescript
public putConfluencePostmortemSettings(value: IncidentPostmortemTemplateConfluencePostmortemSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---

##### `putGoogleDocsPostmortemSettings` <a name="putGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings"></a>

```typescript
public putGoogleDocsPostmortemSettings(value: IncidentPostmortemTemplateGoogleDocsPostmortemSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---

##### `resetConfluencePostmortemSettings` <a name="resetConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings"></a>

```typescript
public resetConfluencePostmortemSettings(): void
```

##### `resetContent` <a name="resetContent" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetGoogleDocsPostmortemSettings` <a name="resetGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings"></a>

```typescript
public resetGoogleDocsPostmortemSettings(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation"></a>

```typescript
public resetLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentPostmortemTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentPostmortemTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IncidentPostmortemTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings">confluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings">googleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser">lastModifiedByUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput">confluencePostmortemSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput">googleDocsPostmortemSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput">incidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType">incidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault">isDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `confluencePostmortemSettings`<sup>Required</sup> <a name="confluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings"></a>

```typescript
public readonly confluencePostmortemSettings: IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `googleDocsPostmortemSettings`<sup>Required</sup> <a name="googleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings"></a>

```typescript
public readonly googleDocsPostmortemSettings: IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedByUser`<sup>Required</sup> <a name="lastModifiedByUser" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser"></a>

```typescript
public readonly lastModifiedByUser: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `confluencePostmortemSettingsInput`<sup>Optional</sup> <a name="confluencePostmortemSettingsInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput"></a>

```typescript
public readonly confluencePostmortemSettingsInput: IResolvable | IncidentPostmortemTemplateConfluencePostmortemSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `googleDocsPostmortemSettingsInput`<sup>Optional</sup> <a name="googleDocsPostmortemSettingsInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput"></a>

```typescript
public readonly googleDocsPostmortemSettingsInput: IResolvable | IncidentPostmortemTemplateGoogleDocsPostmortemSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---

##### `incidentTypeInput`<sup>Optional</sup> <a name="incidentTypeInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput"></a>

```typescript
public readonly incidentTypeInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentPostmortemTemplateConfig <a name="IncidentPostmortemTemplateConfig" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.Initializer"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

const incidentPostmortemTemplateConfig: incidentPostmortemTemplate.IncidentPostmortemTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType">incidentType</a></code> | <code>string</code> | The ID of the incident type this template is associated with. Immutable after creation. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the template. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings">confluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | confluence_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content">content</a></code> | <code>string</code> | The templated content of the postmortem, supporting Markdown and incident template variables. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings">googleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | google_docs_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this template is a default for its incident type. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location">location</a></code> | <code>string</code> | The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

The ID of the incident type this template is associated with. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#incident_type IncidentPostmortemTemplate#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#name IncidentPostmortemTemplate#name}

---

##### `confluencePostmortemSettings`<sup>Optional</sup> <a name="confluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings"></a>

```typescript
public readonly confluencePostmortemSettings: IncidentPostmortemTemplateConfluencePostmortemSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

confluence_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#confluence_postmortem_settings IncidentPostmortemTemplate#confluence_postmortem_settings}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The templated content of the postmortem, supporting Markdown and incident template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#content IncidentPostmortemTemplate#content}

---

##### `googleDocsPostmortemSettings`<sup>Optional</sup> <a name="googleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings"></a>

```typescript
public readonly googleDocsPostmortemSettings: IncidentPostmortemTemplateGoogleDocsPostmortemSettings;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

google_docs_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#google_docs_postmortem_settings IncidentPostmortemTemplate#google_docs_postmortem_settings}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this template is a default for its incident type.

The API stores a timestamp; the effective default for an incident type is the template with the most recent default timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#is_default IncidentPostmortemTemplate#is_default}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#location IncidentPostmortemTemplate#location}

---

### IncidentPostmortemTemplateConfluencePostmortemSettings <a name="IncidentPostmortemTemplateConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.Initializer"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

const incidentPostmortemTemplateConfluencePostmortemSettings: incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId">accountId</a></code> | <code>string</code> | The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId">parentId</a></code> | <code>string</code> | The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId">spaceId</a></code> | <code>string</code> | The Confluence space key (e.g. `ENG`), not a numeric space ID. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#parent_id IncidentPostmortemTemplate#parent_id}

---

##### `spaceId`<sup>Optional</sup> <a name="spaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The Confluence space key (e.g. `ENG`), not a numeric space ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#space_id IncidentPostmortemTemplate#space_id}

---

### IncidentPostmortemTemplateGoogleDocsPostmortemSettings <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.Initializer"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

const incidentPostmortemTemplateGoogleDocsPostmortemSettings: incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId">accountId</a></code> | <code>string</code> | The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId">parentFolderId</a></code> | <code>string</code> | The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`). |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `parentFolderId`<sup>Optional</sup> <a name="parentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId"></a>

```typescript
public readonly parentFolderId: string;
```

- *Type:* string

The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#parent_folder_id IncidentPostmortemTemplate#parent_folder_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

new incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId">resetSpaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetSpaceId` <a name="resetSpaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId"></a>

```typescript
public resetSpaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput">spaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput"></a>

```typescript
public readonly spaceIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentPostmortemTemplateConfluencePostmortemSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---


### IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer"></a>

```typescript
import { incidentPostmortemTemplate } from '@cdktn/provider-datadog'

new incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId">resetParentFolderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetParentFolderId` <a name="resetParentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId"></a>

```typescript
public resetParentFolderId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput">parentFolderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId">parentFolderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `parentFolderIdInput`<sup>Optional</sup> <a name="parentFolderIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput"></a>

```typescript
public readonly parentFolderIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `parentFolderId`<sup>Required</sup> <a name="parentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId"></a>

```typescript
public readonly parentFolderId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentPostmortemTemplateGoogleDocsPostmortemSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---



