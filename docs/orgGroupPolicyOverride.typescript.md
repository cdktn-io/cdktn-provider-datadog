# `orgGroupPolicyOverride` Submodule <a name="`orgGroupPolicyOverride` Submodule" id="@cdktn/provider-datadog.orgGroupPolicyOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgGroupPolicyOverride <a name="OrgGroupPolicyOverride" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/org_group_policy_override datadog_org_group_policy_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer"></a>

```typescript
import { orgGroupPolicyOverride } from '@cdktn/provider-datadog'

new orgGroupPolicyOverride.OrgGroupPolicyOverride(scope: Construct, id: string, config: OrgGroupPolicyOverrideConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig">OrgGroupPolicyOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig">OrgGroupPolicyOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OrgGroupPolicyOverride resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct"></a>

```typescript
import { orgGroupPolicyOverride } from '@cdktn/provider-datadog'

orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement"></a>

```typescript
import { orgGroupPolicyOverride } from '@cdktn/provider-datadog'

orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource"></a>

```typescript
import { orgGroupPolicyOverride } from '@cdktn/provider-datadog'

orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport"></a>

```typescript
import { orgGroupPolicyOverride } from '@cdktn/provider-datadog'

orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OrgGroupPolicyOverride resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrgGroupPolicyOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrgGroupPolicyOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/org_group_policy_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OrgGroupPolicyOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupIdInput">orgGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSiteInput">orgSiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuidInput">orgUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupId">orgGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSite">orgSite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuid">orgUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgGroupIdInput`<sup>Optional</sup> <a name="orgGroupIdInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupIdInput"></a>

```typescript
public readonly orgGroupIdInput: string;
```

- *Type:* string

---

##### `orgSiteInput`<sup>Optional</sup> <a name="orgSiteInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSiteInput"></a>

```typescript
public readonly orgSiteInput: string;
```

- *Type:* string

---

##### `orgUuidInput`<sup>Optional</sup> <a name="orgUuidInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuidInput"></a>

```typescript
public readonly orgUuidInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupId"></a>

```typescript
public readonly orgGroupId: string;
```

- *Type:* string

---

##### `orgSite`<sup>Required</sup> <a name="orgSite" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSite"></a>

```typescript
public readonly orgSite: string;
```

- *Type:* string

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuid"></a>

```typescript
public readonly orgUuid: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgGroupPolicyOverrideConfig <a name="OrgGroupPolicyOverrideConfig" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.Initializer"></a>

```typescript
import { orgGroupPolicyOverride } from '@cdktn/provider-datadog'

const orgGroupPolicyOverrideConfig: orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgGroupId">orgGroupId</a></code> | <code>string</code> | The UUID of the org group that owns the policy. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgSite">orgSite</a></code> | <code>string</code> | The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgUuid">orgUuid</a></code> | <code>string</code> | The UUID of the organization being exempted from the policy. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.policyId">policyId</a></code> | <code>string</code> | The UUID of the org group policy the override applies to. Must be a valid UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgGroupId"></a>

```typescript
public readonly orgGroupId: string;
```

- *Type:* string

The UUID of the org group that owns the policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/org_group_policy_override#org_group_id OrgGroupPolicyOverride#org_group_id}

---

##### `orgSite`<sup>Required</sup> <a name="orgSite" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgSite"></a>

```typescript
public readonly orgSite: string;
```

- *Type:* string

The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/org_group_policy_override#org_site OrgGroupPolicyOverride#org_site}

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgUuid"></a>

```typescript
public readonly orgUuid: string;
```

- *Type:* string

The UUID of the organization being exempted from the policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/org_group_policy_override#org_uuid OrgGroupPolicyOverride#org_uuid}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The UUID of the org group policy the override applies to. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/org_group_policy_override#policy_id OrgGroupPolicyOverride#policy_id}

---



