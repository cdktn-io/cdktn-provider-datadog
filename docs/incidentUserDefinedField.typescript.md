# `incidentUserDefinedField` Submodule <a name="`incidentUserDefinedField` Submodule" id="@cdktn/provider-datadog.incidentUserDefinedField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentUserDefinedField <a name="IncidentUserDefinedField" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field datadog_incident_user_defined_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

new incidentUserDefinedField.IncidentUserDefinedField(scope: Construct, id: string, config: IncidentUserDefinedFieldConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig">IncidentUserDefinedFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig">IncidentUserDefinedFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue">putValidValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal">resetOrdinal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue">resetValidValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putValidValue` <a name="putValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue"></a>

```typescript
public putValidValue(value: IResolvable | IncidentUserDefinedFieldValidValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]

---

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetOrdinal` <a name="resetOrdinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal"></a>

```typescript
public resetOrdinal(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetValidValue` <a name="resetValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue"></a>

```typescript
public resetValidValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

incidentUserDefinedField.IncidentUserDefinedField.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentUserDefinedField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentUserDefinedField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IncidentUserDefinedField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted">deleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved">reserved</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue">validValue</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput">incidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput">ordinalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput">validValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType">incidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal">ordinal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted"></a>

```typescript
public readonly deleted: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata"></a>

```typescript
public readonly metadata: IncidentUserDefinedFieldMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `reserved`<sup>Required</sup> <a name="reserved" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved"></a>

```typescript
public readonly reserved: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `validValue`<sup>Required</sup> <a name="validValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue"></a>

```typescript
public readonly validValue: IncidentUserDefinedFieldValidValueList;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `incidentTypeInput`<sup>Optional</sup> <a name="incidentTypeInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput"></a>

```typescript
public readonly incidentTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ordinalInput`<sup>Optional</sup> <a name="ordinalInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput"></a>

```typescript
public readonly ordinalInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validValueInput`<sup>Optional</sup> <a name="validValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput"></a>

```typescript
public readonly validValueInput: IResolvable | IncidentUserDefinedFieldValidValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal"></a>

```typescript
public readonly ordinal: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentUserDefinedFieldConfig <a name="IncidentUserDefinedFieldConfig" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.Initializer"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

const incidentUserDefinedFieldConfig: incidentUserDefinedField.IncidentUserDefinedFieldConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType">incidentType</a></code> | <code>string</code> | The ID of the incident type this field is associated with. Changing the incident type forces a new resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name">name</a></code> | <code>string</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type">type</a></code> | <code>string</code> | The data type of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category">category</a></code> | <code>string</code> | The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue">defaultValue</a></code> | <code>string</code> | The default value for the field. Must be one of the valid values when `valid_values` is set. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal">ordinal</a></code> | <code>string</code> | A decimal string representing the field's display order in the UI. Assigned by the server when not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, users must fill out this field on incidents. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey">tagKey</a></code> | <code>string</code> | For metric tag-type fields only, the metric tag key that powers the autocomplete options. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue">validValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]</code> | valid_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

The ID of the incident type this field is associated with. Changing the incident type forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#incident_type IncidentUserDefinedField#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique identifier of the field.

Must start with a letter or digit and contain only letters, digits, underscores, or periods. Changing the name forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#name IncidentUserDefinedField#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The data type of the field.

Changing the type forces a new resource. Valid values are `dropdown`, `multiselect`, `textbox`, `textarray`, `metrictag`, `autocomplete`, `number`, `datetime`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#type IncidentUserDefinedField#type}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#category IncidentUserDefinedField#category}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

The default value for the field. Must be one of the valid values when `valid_values` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#default_value IncidentUserDefinedField#default_value}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `ordinal`<sup>Optional</sup> <a name="ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal"></a>

```typescript
public readonly ordinal: string;
```

- *Type:* string

A decimal string representing the field's display order in the UI. Assigned by the server when not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#ordinal IncidentUserDefinedField#ordinal}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, users must fill out this field on incidents. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#required IncidentUserDefinedField#required}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

For metric tag-type fields only, the metric tag key that powers the autocomplete options.

Changing the tag key forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#tag_key IncidentUserDefinedField#tag_key}

---

##### `validValue`<sup>Optional</sup> <a name="validValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue"></a>

```typescript
public readonly validValue: IResolvable | IncidentUserDefinedFieldValidValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]

valid_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#valid_value IncidentUserDefinedField#valid_value}

---

### IncidentUserDefinedFieldMetadata <a name="IncidentUserDefinedFieldMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata.Initializer"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

const incidentUserDefinedFieldMetadata: incidentUserDefinedField.IncidentUserDefinedFieldMetadata = { ... }
```


### IncidentUserDefinedFieldValidValue <a name="IncidentUserDefinedFieldValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.Initializer"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

const incidentUserDefinedFieldValidValue: incidentUserDefinedField.IncidentUserDefinedFieldValidValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName">displayName</a></code> | <code>string</code> | The human-readable display name for this value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value">value</a></code> | <code>string</code> | The identifier that is stored when this option is selected. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description">description</a></code> | <code>string</code> | A detailed description of the valid value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription">shortDescription</a></code> | <code>string</code> | A short description of the valid value. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable display name for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The identifier that is stored when this option is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#value IncidentUserDefinedField#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A detailed description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#description IncidentUserDefinedField#description}

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

A short description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#short_description IncidentUserDefinedField#short_description}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentUserDefinedFieldMetadataOutputReference <a name="IncidentUserDefinedFieldMetadataOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

new incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam">searchLimitParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams">searchParams</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam">searchQueryParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath">searchResultPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl">searchUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `searchLimitParam`<sup>Required</sup> <a name="searchLimitParam" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam"></a>

```typescript
public readonly searchLimitParam: string;
```

- *Type:* string

---

##### `searchParams`<sup>Required</sup> <a name="searchParams" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams"></a>

```typescript
public readonly searchParams: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `searchQueryParam`<sup>Required</sup> <a name="searchQueryParam" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam"></a>

```typescript
public readonly searchQueryParam: string;
```

- *Type:* string

---

##### `searchResultPath`<sup>Required</sup> <a name="searchResultPath" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath"></a>

```typescript
public readonly searchResultPath: string;
```

- *Type:* string

---

##### `searchUrl`<sup>Required</sup> <a name="searchUrl" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl"></a>

```typescript
public readonly searchUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IncidentUserDefinedFieldMetadata;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a>

---


### IncidentUserDefinedFieldValidValueList <a name="IncidentUserDefinedFieldValidValueList" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

new incidentUserDefinedField.IncidentUserDefinedFieldValidValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get"></a>

```typescript
public get(index: number): IncidentUserDefinedFieldValidValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentUserDefinedFieldValidValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]

---


### IncidentUserDefinedFieldValidValueOutputReference <a name="IncidentUserDefinedFieldValidValueOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer"></a>

```typescript
import { incidentUserDefinedField } from '@cdktn/provider-datadog'

new incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription">resetShortDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetShortDescription` <a name="resetShortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription"></a>

```typescript
public resetShortDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput">shortDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription">shortDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `shortDescriptionInput`<sup>Optional</sup> <a name="shortDescriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput"></a>

```typescript
public readonly shortDescriptionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentUserDefinedFieldValidValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>

---



