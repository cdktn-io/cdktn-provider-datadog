# `deploymentGate` Submodule <a name="`deploymentGate` Submodule" id="@cdktn/provider-datadog.deploymentGate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentGate <a name="DeploymentGate" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate datadog_deployment_gate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

new deploymentGate.DeploymentGate(scope: Construct, id: string, config: DeploymentGateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig">DeploymentGateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig">DeploymentGateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun">resetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule"></a>

```typescript
public putRule(value: IResolvable | DeploymentGateRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]

---

##### `resetDryRun` <a name="resetDryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun"></a>

```typescript
public resetDryRun(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule"></a>

```typescript
public resetRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

deploymentGate.DeploymentGate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

deploymentGate.DeploymentGate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

deploymentGate.DeploymentGate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

deploymentGate.DeploymentGate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeploymentGate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeploymentGate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeploymentGate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput">dryRunInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput">envInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun">dryRun</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env">env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule"></a>

```typescript
public readonly rule: DeploymentGateRuleList;
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `dryRunInput`<sup>Optional</sup> <a name="dryRunInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput"></a>

```typescript
public readonly dryRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput"></a>

```typescript
public readonly envInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | DeploymentGateRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentGateConfig <a name="DeploymentGateConfig" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.Initializer"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

const deploymentGateConfig: deploymentGate.DeploymentGateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env">env</a></code> | <code>string</code> | The target environment (example: dev). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service">service</a></code> | <code>string</code> | The service name (example: transaction-backend). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun">dryRun</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable Dry Run to test gate behavior without impacting deployments. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier">identifier</a></code> | <code>string</code> | Unique name for multiple gates on the same service/environment. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

The target environment (example: dev).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#env DeploymentGate#env}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The service name (example: transaction-backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#service DeploymentGate#service}

---

##### `dryRun`<sup>Optional</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable Dry Run to test gate behavior without impacting deployments.

The evaluation of a dry run gate always responds with a pass status, but the in-app result is the real status based on rules evaluation. This is particularly useful when performing an initial evaluation of the gate behavior without impacting the deployment pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Unique name for multiple gates on the same service/environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#identifier DeploymentGate#identifier}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | DeploymentGateRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#rule DeploymentGate#rule}

---

### DeploymentGateRule <a name="DeploymentGateRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.Initializer"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

const deploymentGateRule: deploymentGate.DeploymentGateRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name">name</a></code> | <code>string</code> | The rule name. Must be unique within the deployment gate. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type">type</a></code> | <code>string</code> | The rule type (e.g., 'faulty_deployment_detection', 'monitor'). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun">dryRun</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the rule is in dry run mode. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | options block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The rule name. Must be unique within the deployment gate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#name DeploymentGate#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The rule type (e.g., 'faulty_deployment_detection', 'monitor').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#type DeploymentGate#type}

---

##### `dryRun`<sup>Optional</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the rule is in dry run mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options"></a>

```typescript
public readonly options: DeploymentGateRuleOptions;
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#options DeploymentGate#options}

---

### DeploymentGateRuleOptions <a name="DeploymentGateRuleOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.Initializer"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

const deploymentGateRuleOptions: deploymentGate.DeploymentGateRuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration">duration</a></code> | <code>number</code> | The duration for the rule. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources">excludedResources</a></code> | <code>string[]</code> | Resources to exclude from faulty deployment detection. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query">query</a></code> | <code>string</code> | The query for monitor rules. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

The duration for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#duration DeploymentGate#duration}

---

##### `excludedResources`<sup>Optional</sup> <a name="excludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources"></a>

```typescript
public readonly excludedResources: string[];
```

- *Type:* string[]

Resources to exclude from faulty deployment detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#excluded_resources DeploymentGate#excluded_resources}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query for monitor rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/deployment_gate#query DeploymentGate#query}

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentGateRuleList <a name="DeploymentGateRuleList" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

new deploymentGate.DeploymentGateRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get"></a>

```typescript
public get(index: number): DeploymentGateRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeploymentGateRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]

---


### DeploymentGateRuleOptionsOutputReference <a name="DeploymentGateRuleOptionsOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

new deploymentGate.DeploymentGateRuleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources">resetExcludedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetExcludedResources` <a name="resetExcludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources"></a>

```typescript
public resetExcludedResources(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput">excludedResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources">excludedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `excludedResourcesInput`<sup>Optional</sup> <a name="excludedResourcesInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput"></a>

```typescript
public readonly excludedResourcesInput: string[];
```

- *Type:* string[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `excludedResources`<sup>Required</sup> <a name="excludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources"></a>

```typescript
public readonly excludedResources: string[];
```

- *Type:* string[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeploymentGateRuleOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---


### DeploymentGateRuleOutputReference <a name="DeploymentGateRuleOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer"></a>

```typescript
import { deploymentGate } from '@cdktn/provider-datadog'

new deploymentGate.DeploymentGateRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun">resetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptions` <a name="putOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions"></a>

```typescript
public putOptions(value: DeploymentGateRuleOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---

##### `resetDryRun` <a name="resetDryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun"></a>

```typescript
public resetDryRun(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput">dryRunInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput">optionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun">dryRun</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options"></a>

```typescript
public readonly options: DeploymentGateRuleOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a>

---

##### `dryRunInput`<sup>Optional</sup> <a name="dryRunInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput"></a>

```typescript
public readonly dryRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | DeploymentGateRuleOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeploymentGateRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>

---



