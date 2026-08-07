# `incidentType` Submodule <a name="`incidentType` Submodule" id="@cdktn/provider-datadog.incidentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentType <a name="IncidentType" id="@cdktn/provider-datadog.incidentType.IncidentType"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type datadog_incident_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer"></a>

```typescript
import { incidentType } from '@cdktn/provider-datadog'

new incidentType.IncidentType(scope: Construct, id: string, config: IncidentTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig">IncidentTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig">IncidentTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetIsDefault">resetIsDefault</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentType.IncidentType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentType.IncidentType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentType.IncidentType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.incidentType.IncidentType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.incidentType.IncidentType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.incidentType.IncidentType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.incidentType.IncidentType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.incidentType.IncidentType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.incidentType.IncidentType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration"></a>

```typescript
public putConfiguration(value: IncidentTypeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentType.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.incidentType.IncidentType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktn/provider-datadog.incidentType.IncidentType.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.incidentType.IncidentType.isConstruct"></a>

```typescript
import { incidentType } from '@cdktn/provider-datadog'

incidentType.IncidentType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement"></a>

```typescript
import { incidentType } from '@cdktn/provider-datadog'

incidentType.IncidentType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource"></a>

```typescript
import { incidentType } from '@cdktn/provider-datadog'

incidentType.IncidentType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport"></a>

```typescript
import { incidentType } from '@cdktn/provider-datadog'

incidentType.IncidentType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IncidentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference">IncidentTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.isDefault">isDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentType.IncidentType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.incidentType.IncidentType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentType.IncidentType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.incidentType.IncidentType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentType.IncidentType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentType.IncidentType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentType.IncidentType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentType.IncidentType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentType.IncidentType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-datadog.incidentType.IncidentType.property.configuration"></a>

```typescript
public readonly configuration: IncidentTypeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference">IncidentTypeConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | IncidentTypeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.incidentType.IncidentType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentType.IncidentType.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentType.IncidentType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentType.IncidentType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentTypeConfig <a name="IncidentTypeConfig" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.Initializer"></a>

```typescript
import { incidentType } from '@cdktn/provider-datadog'

const incidentTypeConfig: incidentType.IncidentTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.name">name</a></code> | <code>string</code> | Name of the incident type. Must be between 1 and 50 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | The incident type's behavior settings. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.description">description</a></code> | <code>string</code> | Description of the incident type. The description can have a maximum of 512 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this incident type is the default type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the incident type. Must be between 1 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#name IncidentType#name}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.configuration"></a>

```typescript
public readonly configuration: IncidentTypeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

The incident type's behavior settings.

Any field left unset takes its server-side default. This block is applied in a separate call after the incident type is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#configuration IncidentType#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the incident type. The description can have a maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#description IncidentType#description}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this incident type is the default type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#is_default IncidentType#is_default}

---

### IncidentTypeConfiguration <a name="IncidentTypeConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.Initializer"></a>

```typescript
import { incidentType } from '@cdktn/provider-datadog'

const incidentTypeConfiguration: incidentType.IncidentTypeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowIncidentDeletion">allowIncidentDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether incidents of this type can be deleted. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowWorkflows">allowWorkflows</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether users can manually run a workflow from an incident of this type. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.createMessage">createMessage</a></code> | <code>string</code> | An optional message shown to users when they declare an incident of this type. Defaults to an empty string. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.editableTimestamps">editableTimestamps</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidents">privateIncidents</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether responders can create private incidents of this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidentsByDefault">privateIncidentsByDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.slugSource">slugSource</a></code> | <code>string</code> | The source used to derive the incident slug. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.testIncidents">testIncidents</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether test incidents of this type can be created. Defaults to `true`. |

---

##### `allowIncidentDeletion`<sup>Optional</sup> <a name="allowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowIncidentDeletion"></a>

```typescript
public readonly allowIncidentDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether incidents of this type can be deleted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_incident_deletion IncidentType#allow_incident_deletion}

---

##### `allowWorkflows`<sup>Optional</sup> <a name="allowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowWorkflows"></a>

```typescript
public readonly allowWorkflows: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether users can manually run a workflow from an incident of this type. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_workflows IncidentType#allow_workflows}

---

##### `createMessage`<sup>Optional</sup> <a name="createMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.createMessage"></a>

```typescript
public readonly createMessage: string;
```

- *Type:* string

An optional message shown to users when they declare an incident of this type. Defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#create_message IncidentType#create_message}

---

##### `editableTimestamps`<sup>Optional</sup> <a name="editableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.editableTimestamps"></a>

```typescript
public readonly editableTimestamps: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#editable_timestamps IncidentType#editable_timestamps}

---

##### `privateIncidents`<sup>Optional</sup> <a name="privateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidents"></a>

```typescript
public readonly privateIncidents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether responders can create private incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents IncidentType#private_incidents}

---

##### `privateIncidentsByDefault`<sup>Optional</sup> <a name="privateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidentsByDefault"></a>

```typescript
public readonly privateIncidentsByDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents_by_default IncidentType#private_incidents_by_default}

---

##### `slugSource`<sup>Optional</sup> <a name="slugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.slugSource"></a>

```typescript
public readonly slugSource: string;
```

- *Type:* string

The source used to derive the incident slug.

When set to `servicenow`, incidents display the ServiceNow record ID instead of the public ID. If no ServiceNow integration exists, the public ID is displayed. Defaults to `default`. Valid values are `default`, `servicenow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#slug_source IncidentType#slug_source}

---

##### `testIncidents`<sup>Optional</sup> <a name="testIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.testIncidents"></a>

```typescript
public readonly testIncidents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether test incidents of this type can be created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#test_incidents IncidentType#test_incidents}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentTypeConfigurationOutputReference <a name="IncidentTypeConfigurationOutputReference" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer"></a>

```typescript
import { incidentType } from '@cdktn/provider-datadog'

new incidentType.IncidentTypeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowIncidentDeletion">resetAllowIncidentDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowWorkflows">resetAllowWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetCreateMessage">resetCreateMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetEditableTimestamps">resetEditableTimestamps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidents">resetPrivateIncidents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidentsByDefault">resetPrivateIncidentsByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetSlugSource">resetSlugSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetTestIncidents">resetTestIncidents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowIncidentDeletion` <a name="resetAllowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowIncidentDeletion"></a>

```typescript
public resetAllowIncidentDeletion(): void
```

##### `resetAllowWorkflows` <a name="resetAllowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowWorkflows"></a>

```typescript
public resetAllowWorkflows(): void
```

##### `resetCreateMessage` <a name="resetCreateMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetCreateMessage"></a>

```typescript
public resetCreateMessage(): void
```

##### `resetEditableTimestamps` <a name="resetEditableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetEditableTimestamps"></a>

```typescript
public resetEditableTimestamps(): void
```

##### `resetPrivateIncidents` <a name="resetPrivateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidents"></a>

```typescript
public resetPrivateIncidents(): void
```

##### `resetPrivateIncidentsByDefault` <a name="resetPrivateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidentsByDefault"></a>

```typescript
public resetPrivateIncidentsByDefault(): void
```

##### `resetSlugSource` <a name="resetSlugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetSlugSource"></a>

```typescript
public resetSlugSource(): void
```

##### `resetTestIncidents` <a name="resetTestIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetTestIncidents"></a>

```typescript
public resetTestIncidents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletionInput">allowIncidentDeletionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflowsInput">allowWorkflowsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessageInput">createMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestampsInput">editableTimestampsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefaultInput">privateIncidentsByDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsInput">privateIncidentsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSourceInput">slugSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidentsInput">testIncidentsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletion">allowIncidentDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflows">allowWorkflows</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessage">createMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestamps">editableTimestamps</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidents">privateIncidents</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefault">privateIncidentsByDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSource">slugSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidents">testIncidents</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowIncidentDeletionInput`<sup>Optional</sup> <a name="allowIncidentDeletionInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletionInput"></a>

```typescript
public readonly allowIncidentDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowWorkflowsInput`<sup>Optional</sup> <a name="allowWorkflowsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflowsInput"></a>

```typescript
public readonly allowWorkflowsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createMessageInput`<sup>Optional</sup> <a name="createMessageInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessageInput"></a>

```typescript
public readonly createMessageInput: string;
```

- *Type:* string

---

##### `editableTimestampsInput`<sup>Optional</sup> <a name="editableTimestampsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestampsInput"></a>

```typescript
public readonly editableTimestampsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privateIncidentsByDefaultInput`<sup>Optional</sup> <a name="privateIncidentsByDefaultInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefaultInput"></a>

```typescript
public readonly privateIncidentsByDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privateIncidentsInput`<sup>Optional</sup> <a name="privateIncidentsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsInput"></a>

```typescript
public readonly privateIncidentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `slugSourceInput`<sup>Optional</sup> <a name="slugSourceInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSourceInput"></a>

```typescript
public readonly slugSourceInput: string;
```

- *Type:* string

---

##### `testIncidentsInput`<sup>Optional</sup> <a name="testIncidentsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidentsInput"></a>

```typescript
public readonly testIncidentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowIncidentDeletion`<sup>Required</sup> <a name="allowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletion"></a>

```typescript
public readonly allowIncidentDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowWorkflows`<sup>Required</sup> <a name="allowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflows"></a>

```typescript
public readonly allowWorkflows: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createMessage`<sup>Required</sup> <a name="createMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessage"></a>

```typescript
public readonly createMessage: string;
```

- *Type:* string

---

##### `editableTimestamps`<sup>Required</sup> <a name="editableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestamps"></a>

```typescript
public readonly editableTimestamps: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privateIncidents`<sup>Required</sup> <a name="privateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidents"></a>

```typescript
public readonly privateIncidents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privateIncidentsByDefault`<sup>Required</sup> <a name="privateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefault"></a>

```typescript
public readonly privateIncidentsByDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `slugSource`<sup>Required</sup> <a name="slugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSource"></a>

```typescript
public readonly slugSource: string;
```

- *Type:* string

---

##### `testIncidents`<sup>Required</sup> <a name="testIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidents"></a>

```typescript
public readonly testIncidents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentTypeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---



