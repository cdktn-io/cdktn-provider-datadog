# `statusPage` Submodule <a name="`statusPage` Submodule" id="@cdktn/provider-datadog.statusPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPage <a name="StatusPage" id="@cdktn/provider-datadog.statusPage.StatusPage"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page datadog_status_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer"></a>

```typescript
import { statusPage } from '@cdktn/provider-datadog'

new statusPage.StatusPage(scope: Construct, id: string, config: StatusPageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig">StatusPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig">StatusPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo">resetCompanyLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage">resetEmailHeaderImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon">resetFavicon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon">resetSlackAppIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled">resetSlackSubscriptionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled">resetSubscriptionsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPage.StatusPage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPage.StatusPage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPage.StatusPage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.statusPage.StatusPage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCompanyLogo` <a name="resetCompanyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo"></a>

```typescript
public resetCompanyLogo(): void
```

##### `resetEmailHeaderImage` <a name="resetEmailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage"></a>

```typescript
public resetEmailHeaderImage(): void
```

##### `resetFavicon` <a name="resetFavicon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon"></a>

```typescript
public resetFavicon(): void
```

##### `resetSlackAppIcon` <a name="resetSlackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon"></a>

```typescript
public resetSlackAppIcon(): void
```

##### `resetSlackSubscriptionsEnabled` <a name="resetSlackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled"></a>

```typescript
public resetSlackSubscriptionsEnabled(): void
```

##### `resetSubscriptionsEnabled` <a name="resetSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled"></a>

```typescript
public resetSubscriptionsEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct"></a>

```typescript
import { statusPage } from '@cdktn/provider-datadog'

statusPage.StatusPage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement"></a>

```typescript
import { statusPage } from '@cdktn/provider-datadog'

statusPage.StatusPage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource"></a>

```typescript
import { statusPage } from '@cdktn/provider-datadog'

statusPage.StatusPage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport"></a>

```typescript
import { statusPage } from '@cdktn/provider-datadog'

statusPage.StatusPage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StatusPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StatusPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StatusPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain">customDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled">customDomainEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl">pageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput">companyLogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput">domainPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput">emailHeaderImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput">faviconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput">slackAppIconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput">slackSubscriptionsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput">subscriptionsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput">visualizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo">companyLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix">domainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage">emailHeaderImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.favicon">favicon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon">slackAppIcon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled">slackSubscriptionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType">visualizationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPage.StatusPage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPage.StatusPage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPage.StatusPage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPage.StatusPage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

---

##### `customDomainEnabled`<sup>Required</sup> <a name="customDomainEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled"></a>

```typescript
public readonly customDomainEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `pageUrl`<sup>Required</sup> <a name="pageUrl" id="@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl"></a>

```typescript
public readonly pageUrl: string;
```

- *Type:* string

---

##### `companyLogoInput`<sup>Optional</sup> <a name="companyLogoInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput"></a>

```typescript
public readonly companyLogoInput: string;
```

- *Type:* string

---

##### `domainPrefixInput`<sup>Optional</sup> <a name="domainPrefixInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput"></a>

```typescript
public readonly domainPrefixInput: string;
```

- *Type:* string

---

##### `emailHeaderImageInput`<sup>Optional</sup> <a name="emailHeaderImageInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput"></a>

```typescript
public readonly emailHeaderImageInput: string;
```

- *Type:* string

---

##### `faviconInput`<sup>Optional</sup> <a name="faviconInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput"></a>

```typescript
public readonly faviconInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `slackAppIconInput`<sup>Optional</sup> <a name="slackAppIconInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput"></a>

```typescript
public readonly slackAppIconInput: string;
```

- *Type:* string

---

##### `slackSubscriptionsEnabledInput`<sup>Optional</sup> <a name="slackSubscriptionsEnabledInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput"></a>

```typescript
public readonly slackSubscriptionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subscriptionsEnabledInput`<sup>Optional</sup> <a name="subscriptionsEnabledInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput"></a>

```typescript
public readonly subscriptionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `visualizationTypeInput`<sup>Optional</sup> <a name="visualizationTypeInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput"></a>

```typescript
public readonly visualizationTypeInput: string;
```

- *Type:* string

---

##### `companyLogo`<sup>Required</sup> <a name="companyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo"></a>

```typescript
public readonly companyLogo: string;
```

- *Type:* string

---

##### `domainPrefix`<sup>Required</sup> <a name="domainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix"></a>

```typescript
public readonly domainPrefix: string;
```

- *Type:* string

---

##### `emailHeaderImage`<sup>Required</sup> <a name="emailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage"></a>

```typescript
public readonly emailHeaderImage: string;
```

- *Type:* string

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.favicon"></a>

```typescript
public readonly favicon: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPage.StatusPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `slackAppIcon`<sup>Required</sup> <a name="slackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon"></a>

```typescript
public readonly slackAppIcon: string;
```

- *Type:* string

---

##### `slackSubscriptionsEnabled`<sup>Required</sup> <a name="slackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled"></a>

```typescript
public readonly slackSubscriptionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subscriptionsEnabled`<sup>Required</sup> <a name="subscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled"></a>

```typescript
public readonly subscriptionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPage.StatusPage.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `visualizationType`<sup>Required</sup> <a name="visualizationType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType"></a>

```typescript
public readonly visualizationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageConfig <a name="StatusPageConfig" id="@cdktn/provider-datadog.statusPage.StatusPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.Initializer"></a>

```typescript
import { statusPage } from '@cdktn/provider-datadog'

const statusPageConfig: statusPage.StatusPageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix">domainPrefix</a></code> | <code>string</code> | The subdomain prefix used to build the status page's URL. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name">name</a></code> | <code>string</code> | The name of the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type">type</a></code> | <code>string</code> | The type of the status page. Valid values are: public, internal. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType">visualizationType</a></code> | <code>string</code> | How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo">companyLogo</a></code> | <code>string</code> | The company logo displayed on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage">emailHeaderImage</a></code> | <code>string</code> | The header image included in subscriber emails. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon">favicon</a></code> | <code>string</code> | The favicon displayed for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon">slackAppIcon</a></code> | <code>string</code> | The icon used for the status page's Slack app integration. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled">slackSubscriptionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Slack subscriber notifications are enabled for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether subscriber notifications are enabled for the status page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainPrefix`<sup>Required</sup> <a name="domainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix"></a>

```typescript
public readonly domainPrefix: string;
```

- *Type:* string

The subdomain prefix used to build the status page's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#domain_prefix StatusPage#domain_prefix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#name StatusPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the status page. Valid values are: public, internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#type StatusPage#type}

---

##### `visualizationType`<sup>Required</sup> <a name="visualizationType" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType"></a>

```typescript
public readonly visualizationType: string;
```

- *Type:* string

How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#visualization_type StatusPage#visualization_type}

---

##### `companyLogo`<sup>Optional</sup> <a name="companyLogo" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo"></a>

```typescript
public readonly companyLogo: string;
```

- *Type:* string

The company logo displayed on the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#company_logo StatusPage#company_logo}

---

##### `emailHeaderImage`<sup>Optional</sup> <a name="emailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage"></a>

```typescript
public readonly emailHeaderImage: string;
```

- *Type:* string

The header image included in subscriber emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#email_header_image StatusPage#email_header_image}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon"></a>

```typescript
public readonly favicon: string;
```

- *Type:* string

The favicon displayed for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#favicon StatusPage#favicon}

---

##### `slackAppIcon`<sup>Optional</sup> <a name="slackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon"></a>

```typescript
public readonly slackAppIcon: string;
```

- *Type:* string

The icon used for the status page's Slack app integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_app_icon StatusPage#slack_app_icon}

---

##### `slackSubscriptionsEnabled`<sup>Optional</sup> <a name="slackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled"></a>

```typescript
public readonly slackSubscriptionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Slack subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_subscriptions_enabled StatusPage#slack_subscriptions_enabled}

---

##### `subscriptionsEnabled`<sup>Optional</sup> <a name="subscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled"></a>

```typescript
public readonly subscriptionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#subscriptions_enabled StatusPage#subscriptions_enabled}

---



